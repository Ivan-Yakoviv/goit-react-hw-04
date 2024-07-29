import axios from "axios";

const API_KEY = "otTGWoIxQNzliFudXJVId93wApk-ehHVJdDDWbun6I4";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;


export const fetchArticlesWithTopic = async (query,page) => {
   const response = await axios.get("/search/photos", {
    params: {
      query,
      per_page: 16,
      page,
      orientation: "landscape",
    },
  });

  return response.data;
};