import axios from "axios";

export const postData = async (question_text:string, feedback_text:string) => {
  console.log("entrou")
  const configHeader = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  };
  try {
    const response = await axios.post(
      "http://localhost:9000/quiz",
      { question_text, feedback_text },
      configHeader
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getRatingConfig = async () => {
  const configHeader = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  };

  try {
    const response = await axios.post(
      "http://localhost:9000/quiz/23",
      configHeader
    );
    return response.data.message[0];
  } catch (error) {
    console.error(error);
  }
};

export const postAssessment = async ( feedback_end:string, rating:number,) => {
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
      { feedback_end, rating },
      configHeader
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
