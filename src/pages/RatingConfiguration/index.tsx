import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import TextConfig from "../../components/TextConfig";
import TextRating from "../../components/TextRating";
import { message } from "antd";
import { postData } from "../../api";
import { useLocation } from "react-router-dom";
import axios from "axios";
const RatingConfiguration = () => {
  const location = useLocation();

  const [question_text, setQuestion_text] = useState(
    location.state?.question_text || ""
  );
  const [feedback_text, setFeedback_text] = useState(
    location.state?.feedback_text || ""
  );
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const idStr = new URLSearchParams(location.search).get("id");
      if (idStr) {
        try {
          const result = await axios.get(`http://localhost:9000/quiz/${idStr}`);
          const responseArr = result.data.message.map(
            (item: any, index: number) => ({
              key: index,
              mensagem: item.question_text,
              feedback: item.feedback_text,
            })
          );
          setResponseData(responseArr);
          setQuestion_text(responseArr[0].mensagem);
          setFeedback_text(responseArr[0].feedback);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [location]);

  console.log(question_text, "q");
  console.log(feedback_text, "f");
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
  
    const id = new URLSearchParams(location.search).get("id");
    if (id) {
      try {
        await axios.patch(`http://localhost:9000/quiz`, {
          id,
          question_text,
          feedback_text
        });
        message.success("Dados atualizados com sucesso!");
      } catch (error) {
        message.error("Erro ao atualizar dados");
      }
    } else {
      try {
        const response = await postData(question_text, feedback_text);
        message.success("Dados enviados com sucesso!");
        console.log(response, "response");
      } catch (error) {
        message.error("Erro ao enviar dados");
      }
    }
  };

  return (
    <Form>
      <TextConfig
        onChange={handleTextConfigChange}
        value={question_text}
      />
      <TextRating
        onChange={handleTextRatingChange}
        value={feedback_text }
      />

      <Button onClick={handleClick}>Avançar</Button>
    </Form>
  );
};

export default RatingConfiguration;
