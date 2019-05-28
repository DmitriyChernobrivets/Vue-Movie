<template>
  <div>
    <v-layout row justify-space-between>
      <div class="logo"></div>
      <v-spacer></v-spacer>
      <v-btn flat v-for="item in menu" :key="item.title" :to="item.path">{{item.title}}</v-btn>
    </v-layout>

    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          title: "Home"
        },
        {
          path: "/watchlist",
          title: "Watchlist"
        },
        {
          path: "/signin",
          title: "signin"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 8px 0;
}
.logo {
  height: 50px;
  width: 150px;
  border: 1px solid black;
}
</style>