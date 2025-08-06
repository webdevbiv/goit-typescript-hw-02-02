import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import s from "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const query = form.elements[0].value.trim();
    if (query === "") {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(query);
    form.reset();
  };
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
        <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
