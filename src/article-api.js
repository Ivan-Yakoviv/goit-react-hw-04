import axios from "axios";

 const API_KEY = "otTGWoIxQNzliFudXJVId93wApk-ehHVJdDDWbun6I4";
axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async topic => {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};