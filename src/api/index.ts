import axios from "axios";
const API_URL = "http://localhost:9000/quiz";
export const postData = async (
  question_text: string,
  feedback_text: string
) => {
  console.log("entrou");
  const configHeader = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  };
  try {
    const response = await axios.post(
      `${API_URL}`,
      { question_text, feedback_text },
      configHeader
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getData = async (id: number) => {
  const configHeader = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  };

  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postAssessment = async (
  id_comments: number,
  feedback_end: string,
  rating: number
) => {
  const configHeader = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  };

  try {
    const response = await axios.post(
      "http://localhost:9000/assessment",
      { feedback_end, rating, id_comments },
      configHeader
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Erro ao enviar dados");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao enviar dados");
  }
};

export const getQuestions = async (quizId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${quizId}`);
    const message = response.data.message.find(
      (item: any) => item.id === Number(quizId)
    );
    if (!message) {
      throw new Error(`Pergunta com o ID ${quizId} não encontrada.`);
    }
    return {
      id: message.id,
      question_text: message.question_text,
    };
  } catch (error) {
    throw new Error("Erro ao obter questões");
  }
};

export const getFeedback = async (quizId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${quizId}`);
    const message = response.data.message.find(
      (item: any) => item.id === Number(quizId)
    );
    if (!message) {
      throw new Error(`Pergunta com o ID ${quizId} não encontrada.`);
    }
    return {
      id: message.id,
      feedback_text: message.feedback_text,
    };
  } catch (error) {
    throw new Error("Erro ao obter feedback");
  }
};
