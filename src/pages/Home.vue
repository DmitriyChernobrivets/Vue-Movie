<template>
  <v-container>
    <v-layout row justify-space-between>
      <v-flex xs12 sm3>
        <v-select
          :items="genres"
          v-model="currentSelectOption"
          label="Genres"
          solo
          @change="onSelectChange"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4>
        <v-text-field
          v-model="searchValue"
          solo
          label="Search"
          clearable
          prepend-inner-icon="search"
          @click:prepend-inner="handleSearch"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <!-- <MovieList v-if="!getError"></MovieList> -->
    <div
      v-if="!getError"
      v-infinite-scroll="loadMovies"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <v-layout row wrap justify-space-between>
        <MovieCard v-for="movie in getMovies" :key="movie.id" :movie="movie"></MovieCard>
      </v-layout>
    </div>
    <ErrorHandler v-else :message="getError"></ErrorHandler>

    <Spinner class="spinner" fadeIn name="wave" color="red" v-if="getLoading"/>
  </v-container>
</template>

<script>
import MovieCard from "../components/MovieCard";
import ErrorHandler from "../components/ErrorHandler";
import { genresReduce } from "../helpers/Helpfunctions";
import queryString from "query-string";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    MovieCard: MovieCard,
    ErrorHandler: ErrorHandler
  },
  data: () => ({
    searchValue: "",
    genres: genresReduce(),
    currentSelectOption: null
  }),
  computed: mapGetters(["getError", "getLoading", "getMovies"]),

  methods: {
    ...mapActions(["fetchByGenre", "fetchSearch", "fetchMovies"]),

    onSelectChange(value) {
      this.$router.push({ path: `/`, query: { search: value } });
    },
    handleSearch() {
      if (this.searchValue.trim() === "") {
        return;
      }
      this.fetchSearch(this.searchValue);
      this.searchValue = "";
    },
    loadMovies() {
      this.fetchMovies(this.currentSelectOption);
    }
  },
  mounted() {
    this.currentSelectOption = this.$route.query.search || null;
  },
  watch: {
    $route(to, from) {
      if (this.$route.query.search) {
        this.fetchByGenre(this.$route.query.search);
        this.currentSelectOption = this.$route.query.search;
      }
    }
  }
};
</script>

<style lang="scss">
.spinner {
  margin: 0 auto;
}
</style>