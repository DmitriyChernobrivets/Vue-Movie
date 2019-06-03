import axios from "axios";
import settings from "./config.js";

const site = axios.create({
  baseURL: settings.BASE_URL
});

const api = {
  fetchNowPlayingMovies: page =>
    site.get(
      `movie/now_playing?api_key=${
        settings.API_KEY
      }&language=en-US&page=${page}`
    ),
  fetchbyGenre: payload =>
    site.get(
      `discover/movie?api_key=${settings.API_KEY}&language=en-US&page=${
        payload.page
      }&with_genres=${payload.genre}`
    ),
  fetchSearch: payload =>
    site.get(
      `search/movie?api_key=${settings.API_KEY}&language=en-US&query=${
        payload.query
      }&page=${payload.page}`
    ),

  fetchTrailer: id =>
    site.get(`movie/${id}/videos?api_key=${settings.API_KEY}&language=en-US`),
  fetchMovieById: id =>
    site.get(`movie/${id}?api_key=${settings.API_KEY}&language=en-US`),
  fetchMovieActors: id =>
    site.get(`movie/${id}/credits?api_key=${settings.API_KEY}`)
};

export default api;
