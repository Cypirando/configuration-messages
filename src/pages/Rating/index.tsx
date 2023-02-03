// import { ReactElement } from "react";
import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Stars from "../../components/Stars";
import TextRating from "../../components/TextRating";

import Title from "../../components/Title";
import { StyledCenter } from "./styles";

const Rating = (props: any) => {
  return (
    <Form>
      <Title>Configurações da avaliação</Title>
      <StyledCenter>
        <Stars />
      </StyledCenter>
      <TextRating />
      <Button>Avansar</Button>
    </Form>
  );
};

export default Rating;
