<template>
  <v-container>
    <v-layout row justify-space-around>
      <v-flex xs12 sm2>
        <v-select :items="genres" label="Genres" solo @change="onSelectChange"></v-select>
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

    <MovieList v-if="!getError"></MovieList>

    <ErrorHandler v-else :message="getError"></ErrorHandler>

    <Spinner class="spinner" fadeIn name="wave" color="red" v-if="getLoading"/>
  </v-container>
</template>

<script>
import MovieList from "../components/MovieList";
import ErrorHandler from "../components/ErrorHandler";
import { genresReduce } from "../helpers/Helpfunctions";
import queryString from "query-string";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    MovieList: MovieList,
    ErrorHandler: ErrorHandler
  },
  data: () => ({
    searchValue: "",
    genres: genresReduce()
  }),
  computed: mapGetters(["getError", "getLoading"]),
  methods: {
    ...mapActions(["fetchByGenre", "fetchSearch"]),
    onSelectChange(value) {
      this.fetchByGenre(value);
    },
    handleSearch() {
      if (this.searchValue.trim() === "") {
        return;
      }
      this.fetchSearch(this.searchValue);
      this.searchValue = "";
    }
  }
};
</script>

<style lang="scss">

.spinner {
  margin: 0 auto;
}
</style>