
import { StyledButton } from "./styles";

interface ButtonProps {
   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
   text: string;
}

const Button = (props: ButtonProps) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;
