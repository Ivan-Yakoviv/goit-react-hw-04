import s from './SearchBar.module.css'
import {toast} from "react-hot-toast";

// const notify = () => toast.error('Please enter search term!')


const SearchBar = ({onSearch}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
      const inputValue = form.elements.search.value.trim();
      if(inputValue === "") {
        alert("Please enter search term!")
			return;
		}
    onSearch(inputValue);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input className={s.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos" />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
}

export default SearchBar
