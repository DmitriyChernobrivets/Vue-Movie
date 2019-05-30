import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import MovieInfo from "../pages/MovieInfo";
import Watchlist from "../pages/Watchlist";
import Auth from "../pages/Auth";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/info/:id",
      name: "MovieInfo",
      component: MovieInfo
    },

    {
      path: "/watchlist",
      name: "Watchlist",
      component: Watchlist
    },

    {
      path: "/signin",
      name: "Auth",
      component: Auth
    }
  ]
});
