import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Question {
  id: number;
  feedback_text: string;
}

const ConfigFeedback = (props: any) => {
  function getFeedbackText(array: Question[], id: number): string {
    return array.filter((obj) => obj.id === id)[0].feedback_text;
  }

  const [feedConfig, setFeedConfig] = useState<Question[]>([]);

  let [searchParams] = useSearchParams();
  let idStr: any = searchParams.get("id");
  let newId: number = +idStr;
  /*Mudar o id aqui */
  const feedbackText = feedConfig.length
    ? getFeedbackText(feedConfig, newId)
    : "";
  /*Mudar o id aqui */
  useEffect(() => {
    axios(`http://localhost:9000/quiz`).then((dados) => {
      setFeedConfig(dados.data.message);
    });
  }, []);

  return (
    <>
      <p>{feedbackText}</p>
    </>
  );
};

export default ConfigFeedback;
