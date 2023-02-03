// import { ReactElement } from "react";
import React from "react";
import { StyledTitle } from "./styles";

interface ButtonProps {
  children:string;
}

const Title = (props: ButtonProps) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
