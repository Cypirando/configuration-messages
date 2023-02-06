// import { ReactElement } from "react";
import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Stars from "../../components/Stars";
import TextRatingUser from "../../components/TextRatingUser";

import Title from "../../components/Title";
import { StyledCenter } from "./styles";

const Rating = (props: any) => {
  const handleClick =  () => {
    console.log("oi")
    // if (!configText) {
    //   alert("O campo da questão é obrigatório!");
    //   return;
    // }

    // try {
    //   const response = await postData(configText, configRating);
    //   message.success("Dados enviados com sucesso!");
    // } catch (error) {
    //   message.error("Erro ao enviar dados");
    // }
  };

  return (
    <Form>
      <Title>Configurações da avaliação</Title>
      <StyledCenter>
        <Stars />
      </StyledCenter>
      <TextRatingUser />
      <Button onClick={handleClick}>Avançar</Button>
    </Form>
  );
};

export default Rating;
