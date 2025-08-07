import s from "./LoadMoreBtn.module.scss";

interface Props {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
