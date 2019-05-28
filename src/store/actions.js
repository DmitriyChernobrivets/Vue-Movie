import api from "../services/api";

export default {
  fetchMovies: async ({ commit }, page) => {
    try {
      const response = await api.fetchNowPlayingMovies(page);
      const movies = response.data.results;
      commit("setMovies", movies);
    } catch (err) {
      commit("setError", err.message);
    }
  }
  //   addCard: ({ commit }, payload) => {}
};
