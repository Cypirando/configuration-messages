import { Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const TextRating: React.FC = () => (
  <>
    <TextArea
      showCount
      maxLength={150}
      style={{ height: 120, resize: 'none' }}
      onChange={onChange}
      placeholder="Deixe aqui seu feedback..."
    />
  </>
);

export default TextRating;