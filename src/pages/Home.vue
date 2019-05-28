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
        ></v-text-field>
      </v-flex>
    </v-layout>

    <MovieList></MovieList>
  </v-container>
</template>

<script>
import MovieList from "../components/MovieList";
import genresList from "../constants/genres";
import queryString from "query-string";

const genresReduce = () =>
  genresList.reduce((acc, genre) => acc.concat(genre.name), []);

export default {
  components: {
    MovieList: MovieList
  },
  data: () => ({
    searchValue: "",
    genres: genresReduce(),
    page: 1
  }),
  methods: {
    onSelectChange(value) {
      const parsed = queryString.parse(location.search, {
        arrayFormat: "comma"
      });
      console.log("parsed", parsed);
      const string = queryString.stringify(parsed, { arrayFormat: "comma" });
      console.log("string", string);
    }
  }
};
</script>

<style lang="scss">
</style>