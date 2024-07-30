import { useState } from 'react';
import './App.css';
import ArticleList from './ArticleList/ArticleList.jsx';
import {fetchPhotos} from '../api.js';
import SearchBar from './SearchBar/SearchBar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx'
import Error from './Error/Error.jsx'

const App = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

const handleSearch = async (query) => {
    try {
	    setArticles([]);
	    setError(false);
      setLoading(true);
      const data = await fetchPhotos(query);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <main>
        <ImageGallery/>
        {loading && <Loader/>}
        {error && <Error/>}
      {articles.length > 0 && <ArticleList items={articles} />}
      </main>
    </div>
  );
};

export default App
