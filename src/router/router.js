import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import FilmInfo from "../pages/FilmInfo";
import Watchlist from "../pages/Watchlist";

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
      name: "FilmInfo",
      component: FilmInfo
    },

    {
      path: "/watchlist",
      name: "Watchlist",
      component: Watchlist
    }
  ]
});
