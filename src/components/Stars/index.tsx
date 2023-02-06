import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
interface StarProps {
  onChange: (newValue: number) => void;
  value: number;
}
const character = ({ index }: any) => {
  return customIcons[index + 1];
};
const Stars: React.FC<StarProps> = ({ onChange, value }) => {
  const handleChange = (value: number) => {
    onChange(value);
  };
  return (
    <>
      <Rate defaultValue={3} character={character} onChange={handleChange} />
    </>
  );
};

export default Stars;
