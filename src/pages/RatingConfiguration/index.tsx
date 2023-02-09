import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import TextConfig from "../../components/TextConfig";
import TextRating from "../../components/TextRating";
// import Title from "../../components/Title";
import { message } from "antd";
import { postData } from "../../api";

const RatingConfiguration = () => {
  const [question_text, setQuestion_text] = useState("");
  const [feedback_text, setFeedback_text] = useState("");

  const handleTextConfigChange = (newValue: any) => {
    setQuestion_text(newValue);
  };

  const handleTextRatingChange = (newValue: any) => {
    setFeedback_text(newValue);
  };

  const handleClick = async () => {
    if (!question_text) {
      message.error("O campos da questão é obrigatório!");
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
      {/* <Title>Configurações da avaliação</Title> */}
      <TextConfig onChange={handleTextConfigChange} value={question_text} />
      <TextRating onChange={handleTextRatingChange} value={feedback_text} />
      <Button onClick={handleClick}>Avançar</Button>
    </Form>
  );
};

export default RatingConfiguration;
