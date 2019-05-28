<template>
  <div v-infinite-scroll="loadMovies" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <v-layout row wrap justify-space-between>
      <v-flex xs12 xl2 lg3 md4 sm6 v-for="movie in movies" :key="movie.id">
        <v-card class="movie__card">
          <v-img
            class="white--text"
            height="200px"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{movie.title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <div class="title">
            <div class="genres">
              <div
                class="genres__item"
                v-for="genre in movie.genre_ids"
                :key="genre "
              >{{genre | changeGenre}}</div>
            </div>
          </div>
          <div class="title description">
            <span class="date">{{movie.release_date | sliceYear}}</span>
            <v-spacer></v-spacer>
            <div class="actions">
              <v-btn :class="!favoriteActive ? 'dark--text': 'red--text'" fab flat small>
                <v-icon>favorite</v-icon>
              </v-btn>

              <v-icon class="rating" style="font-size: 22px; margin-right: 5px;">star</v-icon>

              <span class="rating text">{{movie.vote_average}}</span>
            </div>
          </div>

          <v-card-actions>
            <v-btn flat color="red">Trailer</v-btn>
            <v-btn flat color="red">Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import genres from "../constants/genres";

export default {
  computed: mapState(["movies"]),
  filters: {
    changeGenre(number) {
      return genres.find(genre => genre.id === number).name;
    },
    sliceYear(value) {
      return value.slice(0, 4);
    }
  },

  data() {
    return {
      favoriteActive: false,
      page: 1
    };
  },
  methods: {
    ...mapActions(["addCard", "removeCard", "fetchMovies"]),
    loadMovies() {
      this.fetchMovies(this.page);
      this.page += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.movie__card {
  margin: 0 auto 20px 0;
  width: 95%;

  .title {
    display: flex;
    align-items: center;
    padding: 15px 22px 0;
    &.description {
      padding-top: 0;
    }
    & .date {
      font-size: 14px;
    }
    .rating {
      color: rgb(253, 186, 60);
      &.text {
        font-size: 14px;
      }
    }
  }
  .genres {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    &__item {
      margin: 0 8px 0 0;
      font-size: 14px;
      margin-bottom: 5px;
      color: red;
    }
  }
}
</style>