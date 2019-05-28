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
            :key="genre "
          >{{genre | changeGenre}}</div>
        </div>
      </div>
      <div class="title description">
        <span class="date">{{movie.release_date | sliceYear}}</span>
        <v-spacer></v-spacer>
        <div class="actions">
          <v-btn
            :class="!favoriteActive ? 'dark--text': 'red--text'"
            fab
            flat
            small
            @click="addFavorite"
          >
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
</template>

<script>


export default {
  data() {
    return {
      favoriteActive: false
    };
  },

  filters: {
    changeGenre(number) {
      return genres.find(genre => genre.id === number).name;
    },
    sliceYear(value) {
      return value.slice(0, 4);
    }
  },
  methods: {
    addFavorite() {
      this.favoriteActive = !this.favoriteActive;
    }
  }
};
</script>

