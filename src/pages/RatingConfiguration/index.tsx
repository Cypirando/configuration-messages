// import { useState } from "react";
// import Button from "../../components/Button";
// import Form from "../../components/Form";
// import TextConfig from "../../components/TextConfig";
// import TextRating from "../../components/TextRating";
// import Title from "../../components/Title";
// import { message } from "antd";
// declare module '../../api' {
//   export function postData(configText: string, configRating: string): Promise<any>;
// }

// const RatingConfiguration = () => {
//   const [configText, setConfigText] = useState("");
//   console.log(configText, " Valor Text config");

//   const [configRating, setConfigRating] = useState("");
//   console.log(configRating, " Valor Text rating");

//   const handleTextConfigChange = (newValue: any) => {
//     setConfigText(newValue);
//   };

//   const handleTextRatingChange = (newValue: any) => {
//     setConfigRating(newValue);
//   };
//   const handleClick = () => {
//     if (!configText) {
//       alert("O campos da questão é obrigatório!");
//       return;
//     }
//     console.log({ configText, configRating }, "comentario");
//     postData(configText, configRating)
//       .then((response:any) => {
//         console.log(response);
//         message.success("Dados enviados com sucesso!");
//       })
//       .catch((error:any) => {
//         console.log(error);
//         message.error("Erro ao enviar dados");
//       });
//   };

//   return (
//     <Form>
//       <Title>Configurações da avaliação</Title>
//       <TextConfig onChange={handleTextConfigChange} value={configText} />
//       <TextRating onChange={handleTextRatingChange} value={configRating} />
//       <Button onClick={() => handleClick()}>Avançar</Button>
//     </Form>
//   );
// };

// export default RatingConfiguration;

import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import TextConfig from "../../components/TextConfig";
import TextRating from "../../components/TextRating";
import Title from "../../components/Title";
import { message } from "antd";
import { postData } from "../../api";

const RatingConfiguration = () => {
  const [configText, setConfigText] = useState("");
  const [configRating, setConfigRating] = useState("");

  const handleTextConfigChange = (newValue: any) => {
    setConfigText(newValue);
  };

  const handleTextRatingChange = (newValue: any) => {
    setConfigRating(newValue);
  };

  const handleClick = async () => {
    if (!configText) {
      alert("O campo da questão é obrigatório!");
      return;
    }

    try {
      const response = await postData(configText, configRating);
      message.success("Dados enviados com sucesso!");
    } catch (error) {
      message.error("Erro ao enviar dados");
    }
  };

  return (
    <Form>
      <Title>Configurações da avaliação</Title>
      <TextConfig onChange={handleTextConfigChange} value={configText} />
      <TextRating onChange={handleTextRatingChange} value={configRating} />
      <Button onClick={handleClick}>Avançar</Button>
    </Form>
  );
};

export default RatingConfiguration;
