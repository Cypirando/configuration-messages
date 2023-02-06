import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../Title";

interface Question {
    id: number;
    question_text: string;
  }
  
  const ConfigText = (props: any) => {
    function getQuestionText(array: Question[], id: number): string {
      return array.filter((obj) => obj.id === id)[0].question_text;
    }
  
    const [ratingConfig, setRatingConfig] = useState<Question[]>([]);
    const questionText = ratingConfig.length ? getQuestionText(ratingConfig, 23) : '';
    useEffect(() => {
      axios(`http://localhost:9000/quiz`).then((dados) => {
        setRatingConfig(dados.data.message);
      });
    }, []);
    console.log(questionText, "dddd");
    return (
      <>
        <Title>{questionText}</Title>
      </>
    );
  };
  
  export default ConfigText;
  