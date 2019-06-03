<template>
  <div id="app">
    <nav-component></nav-component>
    <transition name="route-transition">
      <router-view/>
    </transition>
    <modals-container/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "nav-component": Navigation
  },
  computed: {
    ...mapGetters(["getuser"])
  },
  watch: {
    getuser(old, newU) {
      if (old) {
        if (this.$router.history.current.name === "Auth") {
          this.$router.push("/");
        }
      }
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: rgb(226, 226, 226);
  min-width: 450px;
  padding-bottom: 40px;
}
iframe {
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
  padding: 0;
}
.v-menu > div {
  top: 40px !important;
  left: 0 !important;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.route-transition-enter,
.route-transition-leave-active {
  transform: scale(0);
}

.route-transition-enter-active,
.route-transition-leave-active {
  transition: transform 0.5s ease-in-out;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
