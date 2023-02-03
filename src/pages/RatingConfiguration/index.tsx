// import { ReactElement } from "react";
import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import TextConfig from "../../components/TextConfig";
import TextRating from "../../components/TextRating";

import Title from "../../components/Title";
// import { StyledButton } from "./styles";

// interface ButtonProps {
//   children:ReactElement;
// }

const RatingConfiguration = (props:any) => {
  return (
    <Form>
        <Title>Configurações da avaliação</Title>
        <TextConfig/>
        <TextRating/>
        <Button>Avansar</Button>
    </Form>
  )
};

export default RatingConfiguration;
