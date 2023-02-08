import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Question {
  id: number;
  question_text: string;
}
const ConfigText = () => {
  
  const [ratingConfig, setRatingConfig] = useState<Question[]>([]);
  const [questionText, setQuestionText] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    axios(`http://localhost:9000/quiz`).then(({ data: { message } }) => {
      if (!message) return;
      setRatingConfig(message);
      const idStr = searchParams.get("id");
      const id = idStr ? +idStr : 0;
      setQuestionText(
        message.length
          ? message.filter(({ id: questionId }: any) => id === questionId)[0]
              .question_text
          : ""
      );
    });
  }, [searchParams]);

  return <p>{questionText}</p>;
};

export default ConfigText;
