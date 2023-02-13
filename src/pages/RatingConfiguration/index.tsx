
import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import TextConfig from "../../components/TextConfig";
import TextRating from "../../components/TextRating";
import { message } from "antd";
import { postData } from "../../api";
import { useLocation } from 'react-router-dom';

const RatingConfiguration = () => {
  const location = useLocation();
  let state;
  try {
    const stateString = decodeURIComponent(location.search.replace('?state=', ''));
    if (stateString) {
      state = JSON.parse(stateString);
    } else {
      state = {};
    }
  } catch (error) {
    console.error("Error parsing state:", error);
    state = {};
  }
  

  const [question_text, setQuestion_text] = useState(location.state?.question_text || "");
  const [feedback_text, setFeedback_text] = useState(location.state?.feedback_text || "");
  
  const handleTextConfigChange = (newValue: any) => {
    setQuestion_text(newValue);
  };
  
  const handleTextRatingChange = (newValue: any) => {
    setFeedback_text(newValue);
  };
  
  const handleClick = async () => {
    if (!question_text) {
      message.error("O campo da questão é obrigatório!");
      return;
    }
  
    try {
      const response = await postData(question_text, feedback_text);
      message.success("Dados enviados com sucesso!");
      console.log(response, "response");
    } catch (error) {
      message.error("Erro ao enviar dados");
    }
  };
  
  return (
    <Form>
      <TextConfig onChange={handleTextConfigChange} value={question_text} />
      <TextRating onChange={handleTextRatingChange} value={feedback_text} />
      <Button onClick={handleClick}>Avançar</Button>
    </Form>
  );
};
  
export default RatingConfiguration;
