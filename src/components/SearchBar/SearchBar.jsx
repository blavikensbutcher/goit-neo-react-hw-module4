import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

export const SearchBar = ({ onSearch, setPage }) => {
  function handleSubmit(event) {
    event.preventDefault();
    /////////////// ADD TOAST FOR EMPTY QUERY /////////////////
    if (event.target.elements.searchQuery.value === '') {
      toast.error("Field can't be empty!", {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
    /////////////DROP PAGE COUNTER IF ////////////////

    setPage(1);

    //////////// ADD SUBMIT FORM TO USE STATE QUERY ///////////////
    onSearch(event.target.elements.searchQuery.value);

    event.target.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Photo search"
          className={css.input}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
