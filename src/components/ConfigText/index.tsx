import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Question {
  id: number;
  question_text: string;
}

const ConfigText = (props: any) => {
  
  function getQuestionText(array: Question[], id: any): string {
    return array.filter((obj) => obj.id === id)[0].question_text;
  }
  
  const [ratingConfig, setRatingConfig] = useState<Question[]>([]);
  
  let [searchParams] = useSearchParams();
  let idStr: any = searchParams.get("id");
  let newId: number = +idStr;

  /*Mudar o id aqui */
  const questionText = ratingConfig.length
    ? getQuestionText(ratingConfig, newId)
    : "";
  /* */
  useEffect(() => {
    axios(`http://localhost:9000/quiz`).then((dados) => {
      setRatingConfig(dados.data.message);
    });
  }, []);
  // console.log(questionText, "dddd");
  return (
    <>
      <p>{questionText}</p>
    </>
  );
};

export default ConfigText;

//   import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";

// // interface Question {
// //     id: number;
// //     question_text: string;
// //   }

// const ConfigText = (props: any) => {
//   const params = useParams();
//   const { id } = params;

//   let [searchParams] = useSearchParams();

//   console.log(searchParams.get("id"), "queryScreen");

//   const [ratingConfig, setRatingConfig] = useState<any>([]);

//   console.log(ratingConfig);
//   useEffect(() => {
//     axios(`http://localhost:9000/quiz`).then((dados) => {
//       setRatingConfig(dados.data.message);
//     });
//   }, []);

//   return (
//     <>
//       <p>{`Params:${id}`}{`QS: ${searchParams}`}</p>
//     </>
//   );
// };

// export default ConfigText;
