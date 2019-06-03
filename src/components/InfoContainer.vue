<template>
  <v-layout v-if="movie">
    <v-flex xs6>
      <v-img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="img"></v-img>
    </v-flex>
    <v-flex xs6 class="content">
      <h1 class="mb-2">{{movie.title}}</h1>
      <ul class="info-genres mb-2">
        <router-link
          class="genre-item"
          v-for="genre in movie.genres"
          :key="genre.id"
          :to="{path: '/', query: {search: genre.name}}"
          @click.native="$emit('close')"
        >{{genre.name}}</router-link>
      </ul>
      <div class="overview mb-2">
        <h2 class="head">OverViews:</h2>
        <p>{{movie.overview}}</p>
      </div>
      <div class="country mb-4">
        <h2 class="head">Production country:</h2>
        <ul class="country-list">
          <li
            class="country-item"
            v-for="country in movie.production_countries"
            :key="country.iso_3166_1"
          >{{country.name}}</li>
        </ul>
      </div>
      <div class="carousel">
        <h2 class="head">Actors:</h2>
        <carousel :per-page="4" :paginationEnabled="false" :navigationEnabled="true">
          <slide v-for="actor in actors" :key="actor.id">
            <v-img
              v-if="actor.profile_path"
              :src="`https://image.tmdb.org/t/p/w300/${actor.profile_path}`"
            ></v-img>
            <v-img
              v-else
              :src="`https://static1.squarespace.com/static/54ecf211e4b0ed744420c5b6/567f23f9841abaa3c919b3c0/5681d9cde0327c1884fbdb38/1499366267673/noimage.png?format=300w`"
            ></v-img>
            <h4>{{actor.name}}</h4>
          </slide>
        </carousel>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import api from "../services/api";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "InfoDialog",
  props: {
    id: Number
  },
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      actors: null,
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
        const responseActors = await api.fetchMovieActors(id);

        this.movie = response.data;
        this.actors = responseActors.data.cast;
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  margin-bottom: 10px;
}
.content {
  padding: 20px;
}
.info-genres {
  display: flex;
  flex-wrap: wrap;
}
.genre-item {
  color: red;
  margin-right: 10px;
}
.country-list {
  display: flex;
  .country-item {
    margin-right: 15px;
  }
}
.img {
  height: 100%;
}
</style>