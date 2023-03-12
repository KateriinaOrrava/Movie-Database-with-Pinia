<script lang="ts">
import 'vue-search-input/dist/styles.css';
import { ref } from 'vue';
import { useMoviesStore } from '@/stores/movies';


export default {
  data() {
    return {
      newSearchTitle: '',
      categorySingle: 'Any',
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
    id="value"
    placeholder="Enter the movie title ..."
    @change="searchForMovies()"
  />
</template>

<style></style>
