<script lang="ts">
import 'vue-search-input/dist/styles.css';
import { ref } from 'vue';
import { useMoviesStore } from '@/stores/movies';

export default {
  data() {
    return {
      string: 'hello',
      store: useMoviesStore(),
    };
  },
  methods: {},
};
</script>
<template>
  <div class="single-movie-container">
    <div class="single-movie-container__image-and-header">
      <div class="single-movie-container__image-and-header--image">
        <img
          :src="store.singleMovieResult.Poster"
          :alt="store.singleMovieResult.Title"
        />
      </div>
      <div class="single-movie-container__image-and-header--header">
        <h1>{{ store.singleMovieResult.Title }}</h1>
      </div>
    </div>
    <div class="single-movie-container__details">
      <p>Year: {{ store.singleMovieResult.Title }}</p>
      <p>Released: {{ store.singleMovieResult.Released }}</p>
      <p>Runtime: {{ store.singleMovieResult.Runtime }}</p>
      <p>Country : {{ store.singleMovieResult.Country }}</p>
      <p>Language : {{ store.singleMovieResult.Language }}</p>
      <p>Type : {{ store.singleMovieResult.Type }}</p>
      <p>imdbRating : {{ store.singleMovieResult.imdbRating }}</p>
      <p>Writer : {{ store.singleMovieResult.Writer }}</p>
      <p>Director : {{ store.singleMovieResult.Director }}</p>
      <p>Awards :{{ store.singleMovieResult.Awards }}</p>
      <p>Genre : {{ store.singleMovieResult.Genre }}</p>
      <p>Director : {{ store.singleMovieResult.Director }}</p>
      <p>BoxOffice : {{ store.singleMovieResult.BoxOffice }}</p>
    </div>
  </div>
  <h2>this is single movie view</h2>
</template>

<style>
.single-movie-container {
  display: flex;
}
</style>
