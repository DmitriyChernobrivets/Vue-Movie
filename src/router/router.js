import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import Watchlist from "../pages/Watchlist";
import Auth from "../pages/Auth";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
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
