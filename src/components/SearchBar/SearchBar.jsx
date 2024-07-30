// import React from 'react'
import toast from 'react-hot-toast';

const notify = () => toast.error('Here is your toast.');


const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
      const inputValue = form.elements.topic.value.trim();
      if(inputValue === "") {
			notify()
			return;
		}
    onSearch(inputValue);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
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

export default SearchForm
