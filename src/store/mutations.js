export default {
  setMovies(state, payload) {
    state.movies = state.movies.concat(payload);
    state.page += 1;
    state.error = null;
  },
  resetMovies(state) {
    state.movies = [];
    state.error = null;
    state.page = 1;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setGenre(state, payload) {
    state.genre = payload;
  },
  setSearch(state, payload) {
    state.search = payload;
    state.error = null;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  handleWatchlist(state, payload) {
    state.watchlist = payload;
  },
  setuser(state, payload) {
    state.user = payload;
  }
};
