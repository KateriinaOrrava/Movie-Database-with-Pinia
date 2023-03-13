<script lang="ts">
import { useMoviesStore } from '@/stores/movies';
import { stringifyExpression } from '@vue/compiler-core';
import { useRoute } from 'vue-router';
interface LikedMovie {
  Title: string;
  imdbID: string;
}
export default {
  data() {
    return {
      likedMovie: {} as LikedMovie,
      store: useMoviesStore(),
      movies: [] as LikedMovie[],
      newMovie: { Title: '', imdbID: '' } as LikedMovie,
      route: useRoute(),
      addToFavoritesButton: false,
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
    addMovie() {
      if (!this.route.params.id) return;
      this.movies.push({
        Title: this.route.params.title as string as string,
        imdbID: this.route.params.id as string,
      });
      this.newMovie = { Title: '', imdbID: '' };
      this.saveMovie();
      window.alert('added to favorites');
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
    <p>
      <button
        @click="
          addMovie();

          addToFavoritesButton = !addToFavoritesButton;
        "
        :class="{ active: addToFavoritesButton }"
      >
        ❤️
      </button>
    </p>
  </div>
  <button @click="addToFavoritesButton = !addToFavoritesButton">Add</button>
</template>

<style>
.active {
  pointer-events: none;
  background-color: white;
  color: aliceblue;
  cursor: not-allowed;
  padding: 10px;
  border: none;
}
</style>
