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
        <!-- <v-btn flat color="red" @click="showModalTrailer">Trailer</v-btn>

        <v-btn flat color="red" @click="showModalInfo">Info</v-btn>-->
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
      this.$modal.show(
        TrailerContainer,
        { id: this.movie.id },
        { height: 450, width: 700 }
      );
    },

    showInfoModal() {
      this.$modal.show(
        InfoContainer,
        { id: this.movie.id },
        { height: 650, width: 1000 }
      );
    }
  }
};
</script>

<style lang="scss">
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