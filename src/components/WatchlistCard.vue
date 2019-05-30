<template>
  <v-card class="mr2 watchlist-container mr-2">
    <v-img height="150px" :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"></v-img>
    <div class="watchlist-content">
      <h3 class="watchlist-title">{{item.title}}</h3>
      <p>{{item.overview}}</p>
      <v-btn class="watchlist-close" fab @click="onDelete(item.id)">
        <v-icon>close</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WatchlistCard",
  props: ["item"],

  methods: {
    ...mapActions(["deleteFromWatchlist"]),
    onDelete(id) {
      this.deleteFromWatchlist(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.watchlist-container {
  position: relative;
  min-height: 350px;
  .watchlist-content {
    padding: 10px;
    .watchlist-title {
      margin-bottom: 10px;
    }
    .watchlist-close {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
