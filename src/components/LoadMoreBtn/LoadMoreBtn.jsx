import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ setPage, page, query, setIsLoading }) => {
  return (
    <button
      className={css.btn}
      type="submit"
      onClick={() => {
        setPage(page + 1);
        setIsLoading(true);
      }}
    >
      Load More {query}?
    </button>
  );
};
