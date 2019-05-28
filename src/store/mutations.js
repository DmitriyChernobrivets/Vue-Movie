export default {
  setMovies(state, payload) {
    state.movies = state.movies.concat(payload);
    state.error = null;
  },
  setError(state, payload) {
    state.error = payload;
  }
};
