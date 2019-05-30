<template>
  <div>
    <v-layout row justify-space-between class="header">
      <div class="logo"></div>
      <v-spacer></v-spacer>

      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/watchlist">Watchlist</v-btn>
      <v-btn flat v-if="!getuser" to="/signin">SignIn</v-btn>
      <div v-else class="auth-panel">
        <v-btn flat @click="logOut">Logout</v-btn>
        <div class="user-photo">
          <img :src="getuser.photo" alt="getuser.displayName">
        </div>
      </div>
    </v-layout>

    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";
export default {
  name: "Navigation",
  computed: {
    ...mapGetters(["getuser"])
  },
  methods: {
    ...mapActions(["setUser"]),
    logOut() {
      firebase.auth().signOut();
      this.setUser(null);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 8px 0;
}
.header {
  padding: 0 20px;
}
.user-photo {
  border-radius: 100%;
  overflow: hidden;

  margin-left: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }
  & img {
    height: 30px;
    width: 30px;
  }
}
.auth-panel {
  display: flex;
  align-items: center;
  height: inherit;
}
.logo {
  height: 50px;
  width: 150px;
  border: 1px solid black;
}
</style>