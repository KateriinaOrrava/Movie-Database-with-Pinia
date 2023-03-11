<script lang="ts">
import 'vue-search-input/dist/styles.css';
import { ref } from 'vue';
import { useMoviesStore } from '@/stores/movies';
const value = ref('');

export default {
  data() {
    return {
      newSearchTitle: '',
      categorySingle: 'Any',
      value: '',
      store: useMoviesStore()
    };
  },
  methods: {
    searchForMovies(value: string) {
        this.store.fetchMovies()
    },
  },
};
</script>
<template>
    <input
      type="text"
      id="value"
      placeholder="Enter the movie title ..."
      @change="searchForMovies(value)"
    />

</template>

<style></style>
