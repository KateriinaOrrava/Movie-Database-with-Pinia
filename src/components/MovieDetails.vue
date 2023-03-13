d
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
  //   methods: {
  //     getSingleMovieInfo() {
  //         this.store.fetchSingleMovie();
  // }},
};
</script>
<template>
  <div class="single-movie-container">
    <div class="single-movie-container__header">
      <h1>{{ store.singleMovieResult.Title }}</h1>
    </div>
    <div class="single-movie-container__content">
      <div class="single-movie-container__image-and-header--image">
        <img
          :src="store.singleMovieResult.Poster"
          :alt="store.singleMovieResult.Title"
        />
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
        <p>Plot : {{ store.singleMovieResult.Plot }}</p>
        <p>ImdbID : {{ store.singleMovieResult.imdbID }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.single-movie-container__header {
  text-align: center;
  font-size: 2em;
  color: white;
  text-transform: uppercase;
}
.single-movie-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background-color: #151515;
  padding: 10px;
}
.single-movie-container__content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}
.single-movie-container__details {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  color: rgb(219, 212, 212);
  justify-content: space-between;
}
</style>
