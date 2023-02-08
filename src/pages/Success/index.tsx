import React from 'react';
import { Button, Result } from 'antd';

const Success: React.FC = () => (
  <Result
    status="success"
    title="Obrigado por avalia nosso atendimento!"
    subTitle="Conheça nossa pagina clicando aqui!"
    extra={[
      <Button key="sair">Sair</Button>,
    ]}
  />
);

export default Success;