import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

interface TextConfigProps {
  onChange: (newValue: any) => void;
  value: string;
}

const TextConfig: React.FC<TextConfigProps> = ({ onChange, value })  => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <TextArea
        showCount
        maxLength={150}
        style={{ height: 120, resize: "none" }}
        onChange={handleChange}
        placeholder="Deixe aqui sua pergunta..."
      />
    </>
  );
};

export default TextConfig;
