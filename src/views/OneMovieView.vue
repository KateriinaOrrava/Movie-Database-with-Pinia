<script setup lang="ts">
import MovieDetails from '@/components/MovieDetails.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
import SearchBar from '@/components/SearchBar.vue';
import FavoritesMovieAddRemove from '@/components/FavoritesMovieAddRemove.vue';
import { useMoviesStore } from '@/stores/movies';
const store = useMoviesStore();
const queryMovie = ref({});
const isLoading = ref(true);
const route = useRoute();
onMounted(async () => {
  const movie = store.fetchSingleMovie(route.params.id as string);
  console.log(route.params.id);
  console.log(movie);
});
</script>

<template>
  <MovieDetails></MovieDetails>
  <FavoritesMovieAddRemove> </FavoritesMovieAddRemove>
</template>

<style></style>
