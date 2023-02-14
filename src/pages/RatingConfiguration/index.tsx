import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import TextConfig from "../../components/TextConfig";
import TextRating from "../../components/TextRating";
import { message } from "antd";
import { postData, getData } from "../../api";
import { useLocation, useSearchParams } from 'react-router-dom';

const RatingConfiguration = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  let id = 23;
  const idStr = searchParams.get("id");
  id = idStr ? +idStr : 0;
  console.log(id)
 
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(id);
        setQuestion_text(response.question_text);
        setFeedback_text(response.feedback_text);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
