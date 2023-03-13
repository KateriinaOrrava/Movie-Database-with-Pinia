<script lang="ts">
import 'vue-search-input/dist/styles.css';
import { ref } from 'vue';
import { useMoviesStore } from '@/stores/movies';

export default {
  data() {
    return {
      newSearchTitle: '',
      value: '',
      store: useMoviesStore(),
    };
  },
  methods: {
    searchForMovies() {
      this.store.fetchMovies();
    },
  },
};
</script>
<template>
  <input
    type="text"
    v-model.trim="store.title"
    placeholder="Enter the movie title ..."
    @change="searchForMovies()"
    class="input-movie-search-bar"
  />
</template>

<style>
.input-movie-search-bar {
  width: 100%;
  background:#79e18b;
  border:none;
  padding:10px;
  line-height: 2em;
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  font-size: 1.5em;
  text-align: center;
}
</style>
