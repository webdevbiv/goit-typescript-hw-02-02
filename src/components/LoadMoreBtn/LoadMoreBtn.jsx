import s from "./LoadMoreBtn.module.scss";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
