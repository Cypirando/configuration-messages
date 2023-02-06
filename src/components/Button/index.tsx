// import { ReactElement } from "react";
import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children:React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
