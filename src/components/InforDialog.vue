<template>
  <Modal name="info-dialog" @before-open="beforeOpen" :width="700" :height="500">
    <div v-if="movie">{{movie.id}}</div>
  </Modal>
</template>

<script>
import api from "../services/api";

export default {
  name: "InfoDialog",
  data() {
    return {
      movie: null,
      error: null
    };
  },
  methods: {
    async fetchMovieById(id) {
      try {
        const response = await api.fetchMovieById(id);
        this.movie = response.data;
      } catch (error) {
        this.error = error.message;
      }
    },
    beforeOpen(event) {
      console.log(event.params.id);
      this.fetchMovieById(event.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>