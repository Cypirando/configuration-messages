import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const character = ({ index }: any) => {
  return customIcons[index + 1];
};
const App: React.FC = () => (
  <>
    <Rate defaultValue={3} character={character} />
  </>
);

export default App;
