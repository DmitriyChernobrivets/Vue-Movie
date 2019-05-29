<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <div v-for="item in getWatchlist" :key="item.id">{{item.title}}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWatchlist"])
  }
};
</script>

<style lang="scss" scoped>
</style>