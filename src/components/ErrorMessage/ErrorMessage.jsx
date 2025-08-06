import s from "./ErrorMessage.module.scss";
const ErrorMessage = ({ message }) => {
  return <div className={s.error}>{message}</div>;
};

export default ErrorMessage;
