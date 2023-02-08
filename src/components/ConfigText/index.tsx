// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// interface Question {
//   id: number;
//   question_text: string;
// }

// const ConfigText = (props: any) => {

//   function getQuestionText(array: Question[], id: any): string {
//     return array.filter((obj) => obj.id === id)[0].question_text;
//   }

//   const [ratingConfig, setRatingConfig] = useState<Question[]>([]);

//   let [searchParams] = useSearchParams();
//   let idStr: any = searchParams.get("id");
//   let newId: number = +idStr;

//   /*Mudar o id aqui */
//   const questionText = ratingConfig.length
//     ? getQuestionText(ratingConfig, newId)
//     : "";
//   /* */
//   useEffect(() => {
//     axios(`http://localhost:9000/quiz`).then((dados) => {
//       setRatingConfig(dados.data.message);
//     });
//   }, []);
//   // console.log(questionText, "dddd");
//   return (
//     <>
//       <p>{questionText}</p>
//     </>
//   );
// };

// export default ConfigText;
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Question {
  id: number;
  question_text: string;
}
const ConfigText = () => {
  const [ratingConfig, setRatingConfig] = useState<Question[]>([]);
  const [questionText, setQuestionText] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    axios(`http://localhost:9000/quiz`).then(({ data: { message } }) => {
      if (!message) return;
      setRatingConfig(message);
      // const id = +searchParams.get("id");
      const idStr = searchParams.get("id");
      const id = idStr ? +idStr : 0;
      setQuestionText(
        message.length
          ? message.filter(({ id: questionId }: any) => id === questionId)[0]
              .question_text
          : ""
      );
    });

    // axios(`http://localhost:9000/quiz`).then(({ data: { message } }) => {
    //   setRatingConfig(message);
    //   const idStr = searchParams.get("id");
    //   const id = idStr ? +idStr : 0;
    //   setQuestionText(
    //     message.length
    //       ? message.filter(({ id: questionId }: any) => id === questionId)[0]
    //           .question_text
    //       : ""
    //   );
    // });
  }, [searchParams]);
  // useEffect(() => {
  //   axios(`http://localhost:9000/quiz`).then(({ data: { message } }) => {
  //     setRatingConfig(message);
  //     const id = +searchParams.get("id");
  //     setQuestionText(
  //       message.length ? message.filter(({ id: questionId }) => id === questionId)[0].question_text : ""
  //     );
  //   });
  // }, [searchParams]);

  return <p>{questionText}</p>;
};

export default ConfigText;
