<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="mb-3">
        <h2 v-if="getWatchlist.length !== 0">Watchlist</h2>
        <h2 v-else>Watchlist is Empty!</h2>
      </v-flex>
      <v-flex xs12 sm4 class="watchlistcard mb-3" v-for="item in getWatchlist" :key="item.id" >
        <WatchlistCard :item="item"></WatchlistCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import WatchlistCard from "../components/WatchlistCard";

export default {
  name: "WatchlistPage",
  components: {
    WatchlistCard
  },
  computed: {
    ...mapGetters(["getWatchlist"])
  }
};
</script>

<style lang="scss" scoped>
</style>