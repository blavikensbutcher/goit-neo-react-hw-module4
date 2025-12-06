import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load More
    </button>
  );
};
