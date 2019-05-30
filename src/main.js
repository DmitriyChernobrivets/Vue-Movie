import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "firebaseui/dist/firebaseui.css";
import { mapActions } from "vuex";
import infiniteScroll from "vue-infinite-scroll/";
import Spinner from "vue-spinkit";
import * as firebase from "firebase";
import config from "./firebase/config";
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
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setUser(user);
        this.$router.push("/");
      }
    });
  },
  methods: {
    ...mapActions(["setUser"])
  },
  render: h => h(App)
}).$mount("#app");
