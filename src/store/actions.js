import api from "../services/api";
import { replaceGenreNametoId } from "../helpers/Helpfunctions";

export default {
  fetchMovies: async ({ commit, getters }) => {
    commit("setLoading", true);
    try {
      const currentPage = getters.getPage;
      let response;
      const genre = getters.getGenre;
      const search = getters.getSearch;

      if (!genre && !search) {
        response = await api.fetchNowPlayingMovies(currentPage);
      } else if (search) {
        const fetchObj = { page: currentPage, query: search };
        response = await api.fetchSearch(fetchObj);
      } else {
        const genreId = replaceGenreNametoId(genre);
        const fetchObj = { page: currentPage, genre: genreId };
        response = await api.fetchbyGenre(fetchObj);
      }

      const movies = response.data.results;
      commit("setLoading", false);
      commit("setMovies", movies);
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  },
  fetchByGenre: async ({ commit }, payload) => {
    commit("setLoading", true);
    try {
      const genreId = replaceGenreNametoId(payload);
      const fetchObj = { page: 1, genre: genreId };
      const response = await api.fetchbyGenre(fetchObj);
      const movies = response.data.results;
      commit("setGenre", payload);
      commit("resetMovies");
      commit("setLoading", false);
      commit("setMovies", movies);
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  },
  fetchSearch: async ({ commit }, payload) => {
    commit("setLoading", true);
    try {
      const searchObj = {
        page: 1,
        query: payload
      };
      const response = await api.fetchSearch(searchObj);
      const movies = response.data.results;
      if (movies.length === 0) {
        commit("setLoading", false);
        commit("setError", "Nothing Founded!!");
      } else {
        commit("setLoading", false);
        commit("resetMovies");
        commit("setSearch", payload);
        commit("setMovies", movies);
      }
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  },
  addToWatchlist({ commit }, payload) {
    localStorage.setItem("watchlist", JSON.stringify(payload));

    commit("handleWatchlist", payload);
  }

  //   addCard: ({ commit }, payload) => {}
};
