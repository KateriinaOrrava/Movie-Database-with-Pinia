<script lang="ts">
import { useMoviesStore } from '@/stores/movies';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import ErrorComponent from './Error.vue';
import LoadingComponent from './Loading.vue';
interface LikedMovie {
  Title: string;
  imdbID: string;
}
export default {
  data() {
    return {
      store: useMoviesStore(),
      route: useRoute(),
      title: '',
      likedMovie: {} as LikedMovie,
      movies: [] as LikedMovie[],
      newMovie: { Title: '', imdbID: '' } as LikedMovie,
    };
  },
  mounted() {
    if (localStorage.getItem('movies')) {
      try {
        this.movies = JSON.parse(localStorage.getItem('movies')!);
      } catch (e) {
        localStorage.removeItem('movies');
      }
    }
  },
  methods: {
    removeMovie(x: number) {
      this.movies.splice(x, 1);
      this.saveMovie();
    },
    saveMovie() {
      let parsed = JSON.stringify(this.movies);
      localStorage.setItem('movies', parsed);
    },
  },
};
</script>
<template>
  <div class="favorites">
    <h1>This is favorites page</h1>
  </div>
  <div class="favorites-elements">
    <div v-for="(movie, n) in movies">
      <RouterLink :to="`/movie/${movie.imdbID}/${movie.Title}`" class="favorites-elements__single-movie">
        <p class="favorites-elements__single-movie--title">
          MOVIE TITLE: {{ movie.Title }}
        </p>
        <p class="favorites-elements__single-movie--id">
          IMDB ID: {{ movie.imdbID }}
        </p>
        <button
          @click="removeMovie(n)"
          class="favorites-elements__single-movie--btn"
        >
          Remove
        </button></RouterLink
      >
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .favorites-elements {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
  }
  .favorites-elements__single-movie {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: rgb(255, 228, 107);
    padding: 5px;
    gap: 20px;
    border-radius: 5px;
  }
  .favorites-elements__single-movie--btn {
    background-color: transparent;
    border: none;
    color: #51a256;
    text-align: end;
  }
}
</style>
