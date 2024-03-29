export default {
  getMovies: state => state.movies,
  getPage: state => state.page,

  getSearch: state => state.search,
  getError: state => state.error,
  getLoading: state => state.loading,
  getWatchlist: state => state.watchlist,
  isCardinWatchlist: state => id =>
    state.watchlist.find(item => item.id === id),
  getuser: state => state.user
};
