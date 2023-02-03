import { Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const TextConfig: React.FC = () => (
  <>
    <TextArea
      showCount
      maxLength={150}
      style={{ height: 120, resize: 'none' }}
      onChange={onChange}
      placeholder="Deixe aqui sua pergunta..."
    />
  </>
);

export default TextConfig;