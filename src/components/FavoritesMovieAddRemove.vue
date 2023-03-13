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
  <div class="addToFavorites">
    <p>
      <button
        @click="
          addMovie();

          addToFavoritesButton = !addToFavoritesButton;
        "
        :class="{ active: addToFavoritesButton }"
        class="addToFavoritesButton"
      >
        {{ addToFavoritesButton ? '❤️ added to favorites' : '🤍' }}
      </button>
    </p>
  </div>
</template>

<style>
.addToFavorites {
  background-color: #151515;
}
.addToFavoritesButton {
  font-size: 2em;
  background-color: #151515;
  padding: 10px;
  border: none;
  cursor: pointer;
}
.active {
  pointer-events: none;
  color: aliceblue;
  cursor: not-allowed;
}
</style>
