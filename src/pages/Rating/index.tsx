import { message, Modal } from "antd";
import { useState } from "react";
import Button from "../../components/Button";
import ConfigText from "../../components/ConfigText";
import ConfigFeedback from "../../components/ConfigFeedback";
import Form from "../../components/Form";
import Stars from "../../components/Stars";
import TextRatingUser from "../../components/TextRatingUser";
import { postAssessment } from "../../api";

import { StyledCenter, StyledQuestions, StyledFeedback } from "./styles";

const Rating = (props: any) => {
  const [feedback_end, setFeedback_end] = useState("");
  const [rating, setRating] = useState<number>(3);
  const [visible, setVisible] = useState(false);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleFeedbackChange = (newValue: any) => {
    setFeedback_end(newValue);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (!feedback_end) {
      message.error("so campos são obrigatório!");
      return;
    }

    try {
      const response = await postAssessment(feedback_end, rating);
      console.log(response)
      setVisible(true);
    } catch (error) {
      message.error("Erro ao enviar dados");
    }
  };
  const handleOk = () => {
    setVisible(false);
    message.success("Dados enviados com sucesso!");
  };
  return (
    <Form>
      <Modal
        title="Aviso"
        open={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <p>Obrigado por avaliar</p>
      </Modal>
     

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
