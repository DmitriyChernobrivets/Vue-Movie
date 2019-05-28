import axios from "axios";
import settings from "./config.js";

const site = axios.create({
  baseURL: settings.BASE_URL
});

const api = {
  fetchNowPlayingMovies: page =>
    site.get(
      `/movie/now_playing?api_key=${
        settings.API_KEY
      }&language=en-US&page=${page}`
    )
};

export default api;
