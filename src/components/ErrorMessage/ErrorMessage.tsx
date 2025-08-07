import s from "./ErrorMessage.module.scss";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <div className={s.error}>{message}</div>;
};

export default ErrorMessage;
