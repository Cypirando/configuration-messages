import { message, Modal } from "antd";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ConfigText from "../../components/ConfigText";
import ConfigFeedback from "../../components/ConfigFeedback";
import Form from "../../components/Form";
import Stars from "../../components/Stars";
import TextRatingUser from "../../components/TextRatingUser";
import { getQuestions, getFeedback, postAssessment } from "../../api";
import { StyledCenter, StyledQuestions, StyledFeedback, StyledBtn } from "./styles";
import { useLocation, useParams } from "react-router";


const Rating = () => {
  const location = useLocation();
  const { id } = useParams();

  const [feedback_end, setFeedback_end] = useState("");
  const [rating, setRating] = useState<number>(3);
  const [visible, setVisible] = useState(false);
  const [question_text, setQuestion_text] = useState(
    location.state?.question_text || ""
  );
  const [feedback_text, setFeedback_text] = useState(
    location.state?.feedback_text || ""
  );
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
      console.log(response);
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
    if (id) {
      getQuestions(id)
        .then((response) => {
          setQuestion_text(response);
        })
        .catch((error) => {
          message.error("Erro ao obter questões");
        });

      getFeedback(id)
        .then((response) => {
          setFeedback_text(response);
        })
        .catch((error) => {
          message.error("Erro ao obter feedback");
        });
    }
  }, [id]);
 
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
        <ConfigText text={question_text} />
      </StyledQuestions>

      <StyledCenter>
        <Stars onChange={handleRatingChange} value={rating} />
      </StyledCenter>

      <StyledFeedback>
        <ConfigFeedback text={feedback_text} />
      </StyledFeedback>

      <TextRatingUser onChange={handleFeedbackChange} value={feedback_end} />
      <StyledBtn>
        <Button onClick={handleClick} text="Avançar" />
      </StyledBtn>
    </Form>
  );
};

export default Rating;
