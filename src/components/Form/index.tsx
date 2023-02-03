import { StyledForm } from "./styles";
import { ReactElement } from "react";

interface FormProps {
  children: ReactElement | Array<ReactElement>;
}

const Form = (props: FormProps) => {
  return (
    <StyledForm>{props.children}</StyledForm>
  )
};

export default Form;
