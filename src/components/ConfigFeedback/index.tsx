import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Question {
  id: number;
  feedback_text: string;
}

const ConfigFeedback = () => {

  const [feedConfig, setFeedConfig] = useState<Question[]>([]);
  const [feedbackText, setFeedbackText] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    axios(`http://localhost:9000/quiz`).then(({ data: { message } }) => {
      if (!message) return;
      setFeedConfig(message);
      const idStr = searchParams.get("id");
      const id = idStr ? +idStr : 0;
      setFeedbackText(
        message.length
          ? message.filter(({ id: questionId }: any) => id === questionId)[0]
              .feedback_text
          : ""
      );
    });
  }, [searchParams]);


  return <p>{feedbackText}</p>;
};

export default ConfigFeedback;
