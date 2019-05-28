import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import infiniteScroll from "vue-infinite-scroll/";

Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.use(infiniteScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
