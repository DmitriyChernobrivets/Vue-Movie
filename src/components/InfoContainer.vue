<template>
  <div v-if="movie">{{movie.id}}</div>
</template>

<script>
import api from "../services/api";

export default {
  name: "InfoDialog",
  props: {
    id: Number
  },
  data() {
    return {
      movie: null,
      error: null
    };
  },
  mounted() {
    this.fetchMovieById(this.id);
  },
  methods: {
    async fetchMovieById(id) {
      try {
        const response = await api.fetchMovieById(id);
        this.movie = response.data;
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>