// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// interface Question {
//   id: number;
//   question_text: string;
// }
// const ConfigText = () => {
//   const [ratingConfig, setRatingConfig] = useState<Question[]>([]);
//   const [questionText, setQuestionText] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     if (!searchParams || isLoading) {
//       return;
//     }
//     setIsLoading(true);

//     axios(`http://localhost:9000/quiz`).then(({ data: { message } }) => {
//       if (!message) return;
//       setRatingConfig(message);
//       let id = 23;
//       const idStr = searchParams.get("id");
//       id = idStr ? +idStr : 0;
//       const selectedQuestion = message.filter(
//         ({ id: questionId }: any) => id === questionId
//       )[0];
//       setQuestionText(selectedQuestion ? selectedQuestion.question_text : "");
//       setIsLoading(false);
//     });
//   }, []);

//   return <p>{questionText}</p>;
// };

// export default ConfigText;
