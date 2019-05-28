<template>
  <div id="app">
    <nav-component></nav-component>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  data() {
    return {};
  },
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
