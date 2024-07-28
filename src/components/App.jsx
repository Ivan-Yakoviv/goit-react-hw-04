import { useState } from 'react';
import './App.css';
import ArticleList from './ArticleList/ArticleList.jsx';
import {fetchArticlesWithTopic} from '../article-api.js';
import SearchForm from './SearchForm/SearchForm.jsx';
import Loader from './Loader/Loader.jsx'
import Error from './Error/Error.jsx'

const App = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

const handleSearch = async (topic) => {
    try {
	    setArticles([]);
	    setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader/>}
      {error && <Error/>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App
