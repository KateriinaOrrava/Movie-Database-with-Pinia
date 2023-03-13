d
<script lang="ts">
import 'vue-search-input/dist/styles.css';
import { useMoviesStore } from '@/stores/movies';
import ErrorComponent from './Error.vue';
import LoadingComponent from './Loading.vue';

export default {
  data() {
    return {
      string: 'hello',
      store: useMoviesStore(),
    };
  },
  components: { ErrorComponent, LoadingComponent },
};
</script>
<template>
  <div class="single-movie-container">
    <div class="single-movie-container__header">
      <h1>{{ store.singleMovieResult.Title }}</h1>
    </div>
    <ErrorComponent v-if="store.error" />
    <LoadingComponent v-if="store.loading" />
    <div class="single-movie-container__content">
      <div class="single-movie-container__image-and-header--image">
        <img
          :src="store.singleMovieResult.Poster"
          :alt="store.singleMovieResult.Title"
        />
      </div>
      <div class="single-movie-container__details">
        <p class="single-movie-container__details--p">
          Year: {{ store.singleMovieResult.Title }}
        </p>
        <p class="single-movie-container__details--p">
          Released: {{ store.singleMovieResult.Released }}
        </p>
        <p class="single-movie-container__details--p">
          Runtime: {{ store.singleMovieResult.Runtime }}
        </p>
        <p class="single-movie-container__details--p">
          Country : {{ store.singleMovieResult.Country }}
        </p>
        <p class="single-movie-container__details--p">
          Language : {{ store.singleMovieResult.Language }}
        </p>
        <p class="single-movie-container__details--p">
          Type : {{ store.singleMovieResult.Type }}
        </p>
        <p class="single-movie-container__details--p">
          imdbRating : {{ store.singleMovieResult.imdbRating }}
        </p>
        <p class="single-movie-container__details--p">
          Writer : {{ store.singleMovieResult.Writer }}
        </p>
        <p class="single-movie-container__details--p">
          Director : {{ store.singleMovieResult.Director }}
        </p>
        <p class="single-movie-container__details--p">
          Awards :{{ store.singleMovieResult.Awards }}
        </p>
        <p class="single-movie-container__details--p">
          Genre : {{ store.singleMovieResult.Genre }}
        </p>
        <p class="single-movie-container__details--p">
          Director : {{ store.singleMovieResult.Director }}
        </p>
        <p class="single-movie-container__details--p">
          BoxOffice : {{ store.singleMovieResult.BoxOffice }}
        </p>
        <p class="single-movie-container__details--p">
          Plot : {{ store.singleMovieResult.Plot }}
        </p>
        <p class="single-movie-container__details--p">
          ImdbID : {{ store.singleMovieResult.imdbID }}
        </p>
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
  background-color: #151515;
  padding: 10px;
  max-width: 100%;
}
.single-movie-container__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  justify-content: space-between;justify-items: end
}
.single-movie-container__details {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;
  color: rgb(219, 212, 212);
  justify-content: space-between;
  max-width: 100%;
  justify-items: end;
}
.single-movie-container__details--p {
  max-width: 70%;
}
</style>
