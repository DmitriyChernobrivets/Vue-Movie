<template>
  <div v-infinite-scroll="loadMovies" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <v-layout row wrap justify-space-between>
      <MovieCard v-for="movie in getMovies" :key="movie.id" :movie="movie"></MovieCard>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import MovieCard from "./MovieCard";

export default {
  name: "MovieList",
  components: {
    MovieCard: MovieCard
  },
  computed: mapGetters(["getMovies"]),

  data() {
    return {
      favoriteActive: false
    };
  },
  methods: {
    ...mapActions(["addCard", "removeCard", "fetchMovies"]),
    loadMovies() {
      this.fetchMovies();
    },
    addToWatchlist() {
      this.favoriteActive = !this.favoriteActive;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>