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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchParams || isLoading) {
      return;
    }
    setIsLoading(true);

    axios(`http://localhost:9000/quiz`).then(({ data: { message } }) => {
      if (!message) return;
      setFeedConfig(message);
      let id = 23;
      const idStr = searchParams.get("id");
      id = idStr ? +idStr : 0;
      // setFeedbackText(
      //   message.length
      //     ? message.filter(({ id: questionId }: any) => id === questionId)[0]
      //         .feedback_text
      //     : ""
      // );
      const selectedQuestion = message.filter(
        ({ id: questionId }: any) => id === questionId
      )[0];
      setFeedbackText(selectedQuestion ? selectedQuestion.feedback_text : "");
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return <p>{feedbackText}</p>;
};

export default ConfigFeedback;
