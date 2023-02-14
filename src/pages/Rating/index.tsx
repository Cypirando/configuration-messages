import { message, Modal } from "antd";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ConfigText from "../../components/ConfigText";
import ConfigFeedback from "../../components/ConfigFeedback";
import Form from "../../components/Form";
import Stars from "../../components/Stars";
import TextRatingUser from "../../components/TextRatingUser";
import { getQuestions, getFeedback, postAssessment } from "../../api";
import { StyledCenter, StyledQuestions, StyledFeedback } from "./styles";
import { useLocation } from "react-router";

const Rating = () => {
  const location = useLocation();
  const [feedback_end, setFeedback_end] = useState("");
  const [rating, setRating] = useState<number>(3);
  const [visible, setVisible] = useState(false);
  const [questionsText, setQuestionsText] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

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

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    if (id) {
      getQuestions(id).then(response => {
        setQuestionsText(response.data);
      }).catch(error => {
        message.error("Erro ao obter questões");
      });

      getFeedback(id).then(response => {
        setFeedbackText(response.data);
      }).catch(error => {
        message.error("Erro ao obter feedback");
      });
    }
  }, [location]);
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
        <ConfigText text={questionsText}  />
      </StyledQuestions>

      <StyledCenter>
        <Stars onChange={handleRatingChange} value={rating} />
      </StyledCenter>

      <StyledFeedback>
        <ConfigFeedback text={feedbackText}  />
      </StyledFeedback>

      <TextRatingUser onChange={handleFeedbackChange} value={feedback_end} />
      <Button onClick={handleClick}>Avançar</Button>
    </Form>
  );
};

export default Rating;
