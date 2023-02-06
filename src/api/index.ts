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
      "http://localhost:3000/quiz",
      { question_text, feedback_text },
      configHeader
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

// export const getRatingConfig = async () => {
//   const configHeader = {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
//     },
//   };

//   try {
//     const response = await axios.post(
//       "https://4016-189-4-107-66.sa.ngrok.io/quiz/23",
//       configHeader
//     );
//     return response.data.message[0];
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const postAssessment = async (rating, feedback_end) => {
//   const configHeader = {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
//     },
//   };

//   try {
//     const response = await axios.post(
//       "https://4016-189-4-107-66.sa.ngrok.io/assessment",
//       { feedback_end, rating },
//       configHeader
//     );
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };
