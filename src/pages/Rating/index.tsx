import { message } from "antd";
import { useState } from "react";
import Button from "../../components/Button";
import ConfigText from "../../components/ConfigText";
import ConfigFeedback from "../../components/ConfigFeedback";
import Form from "../../components/Form";
import Stars from "../../components/Stars";
import TextRatingUser from "../../components/TextRatingUser";
import { postAssessment } from "../../api";
import Title from "../../components/Title";
import { StyledCenter, StyledQuestions, StyledFeedback } from "./styles";
import {useNavigate } from "react-router-dom";

const Rating = (props: any) => {
  const [success, setSuccess] = useState(false);
  // const location = useLocation();
  // const success = location.state?.success;

  let navigate = useNavigate();
  const [feedback_end, setFeedback_end] = useState("");
  const [rating, setRating] = useState<number>(3);
  // const [ratingConfig, setRatingConfig] = useState({});

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleFeedbackChange = (newValue: any) => {
    setFeedback_end(newValue);
  };

  const handleClick = async () => {
    if (!feedback_end) {
      message.error("so campos são obrigatório!");
      return;
    }

    try {
      const response = await postAssessment(feedback_end, rating);
      message.success("Dados enviados com sucesso!");
      setSuccess(true);
      await navigate("/success");/**, { state: { success: true } } */
      console.log(response, "response");
    } catch (error) {
      message.error("Erro ao enviar dados");
    }
  };
  if (success) {
    return null;
  }

  return (
    <Form>
      <Title>Configurações da avaliação</Title>

      <StyledQuestions>
        <ConfigText />
      </StyledQuestions>

      <StyledCenter>
        <Stars onChange={handleRatingChange} value={rating} />
      </StyledCenter>

      <StyledFeedback>
        <ConfigFeedback />
      </StyledFeedback>

      <TextRatingUser onChange={handleFeedbackChange} value={feedback_end} />
      <Button onClick={handleClick}>Avançar</Button>
    </Form>
  );
};

export default Rating;
