<template>
  <v-flex xs12 xl2 lg3 md4 sm6>
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
            :key="genre"
          >{{genre | changeGenre}}</div>
        </div>
      </div>
      <div class="title description">
        <span class="date">{{movie.release_date | sliceYear}}</span>
        <v-spacer></v-spacer>
        <div class="actions">
          <v-btn
            fab
            flat
            small
            :class="!isCardinWatchlist(movie.id) ? 'black--text' : 'red--text'"
            @click="handleWatchlist(movie)"
          >
            <v-icon>favorite</v-icon>
          </v-btn>

          <v-icon class="rating" style="font-size: 22px; margin-right: 5px;">star</v-icon>

          <span class="rating text">{{movie.vote_average}}</span>
        </div>
      </div>
      <v-card-actions>
        <v-btn flat color="red" @click="showTrailerModal">Trailer</v-btn>

        <v-btn flat color="red" @click="showInfoModal">Info</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TrailerContainer from "./TrailerContainer";
import InfoContainer from "./InfoContainer";

export default {
  name: "MovieCard",
  props: {
    movie: Object
  },

  computed: {
    ...mapGetters(["isCardinWatchlist"])
  },

  methods: {
    ...mapActions(["addToWatchlist"]),
    handleWatchlist(movie) {
      this.addToWatchlist(movie);
    },
    showTrailerModal() {
      this.$modal.show(TrailerContainer, { id: this.movie.id });
    },

    showInfoModal() {
      this.$modal.show(InfoContainer, { id: this.movie.id });
    }
  }
};
</script>

<style lang="scss">
.v--modal {
  width: 1000px !important;
  min-height: 550px !important;
  bottom: 50% !important;
  left: 50% !important;

  transform: translate(-50%, -25%) !important;
  @media screen and (max-width: 996px) {
    width: 600px !important;
    min-height: 500px !important;
  }
  @media screen and (max-width: 600px) {
    width: 100% !important;
  }
}
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