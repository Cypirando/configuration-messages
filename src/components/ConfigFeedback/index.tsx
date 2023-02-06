import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../Title";

interface Question {
    id: number;
    question_text: string;
  }
  
  const ConfigFeedback = (props: any) => {
    function getFeedbackText(array: Question[], id: number): string {
      return array.filter((obj) => obj.id === id)[0].question_text;
    }
  
    const [feedConfig, setFeedConfig] = useState<Question[]>([]);
    const feedbackText = feedConfig.length ? getFeedbackText(feedConfig, 23) : '';
    useEffect(() => {
      axios(`http://localhost:9000/quiz`).then((dados) => {
        setFeedConfig(dados.data.message);
      });
    }, []);
 
    return (
      <>
        <Title>{feedbackText}</Title>
      </>
    );
  };
  
  export default ConfigFeedback;
  