import { useState } from "react";

interface ConfigTextProps {
  text: string;
}

const ConfigFeedback = (props: ConfigTextProps) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return <p>{props.text}</p>;
};

export default ConfigFeedback;
