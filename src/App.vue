<template>
  <div id="app">
    <nav-component></nav-component>
    <transition name="route-transition">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    "nav-component": Navigation
  }
};
</script>

<style lang="scss">
body {
  background-color: rgb(226, 226, 226);
}
.v-menu > div {
  top: 40px !important;
  left: 0 !important;
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
