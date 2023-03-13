<script lang="ts">
import { useMoviesStore } from '@/stores/movies';
import { useRoute } from "vue-router";
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
  <div id="app">
    <div v-for="(movie, n) in movies">
      <p>
        <span class="cat">{{ movie }}</span>
        <button @click="removeMovie(n)">Remove</button>
      </p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .cat {
    width: 100px;
    display: inline-block;
  }
}
</style>
