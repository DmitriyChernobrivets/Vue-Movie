import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import infiniteScroll from "vue-infinite-scroll/";
import Spinner from "vue-spinkit";

import { changeGenre, sliceYear } from "./helpers/Helpfunctions";

Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.use(infiniteScroll);
Vue.component("Spinner", Spinner);
Vue.filter("changeGenre", changeGenre);
Vue.filter("sliceYear", sliceYear);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
