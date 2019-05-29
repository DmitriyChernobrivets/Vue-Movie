export default {
  getMovies: state => state.movies,
  getPage: state => state.page,
  getGenre: state => state.genre,
  getSearch: state => state.search,
  getError: state => state.error,
  getLoading: state => state.loading,
  getWatchlist: state => state.watchlist,
  isCardinWatchlist: state => id => state.watchlist.find(item => item.id === id)
};
