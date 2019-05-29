import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    watchlist: [],
    page: 1,
    loading: false,
    search: null,
    genre: null,
    error: null
  },
  mutations,
  actions,
  getters
});
