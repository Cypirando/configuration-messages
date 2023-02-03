// import { ReactElement } from "react";
import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children:string;
}

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
