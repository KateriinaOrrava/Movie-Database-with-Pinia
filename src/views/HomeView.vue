<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import { ref, onMounted, computed } from 'vue';
import { useGetMoviesStore } from '@/stores/movies';
const store = useGetMoviesStore();
const msg = ref('Here are the results');
const getMovies = computed(() => {
  return store.getMovies;
});
const movies = computed(() => {
  return store.movies;
});
onMounted(() => {
  store.fetchMovies();
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <div>
    <h4>{{ msg }}</h4>
    <div class="all-movies">
      <div
        v-for="movie in movies"
        :key="movie.imdbID"
        class="single-movie-card"
      >
        <div class="single-movie-card__img-container">
          <img
            :src="movie.Poster"
            alt="movie.Title"
            class="single-movie-card__img-container--img"
          />
        </div>
        <div class="single-movie-card__title-container">
          <h5>{{ movie.Title }}</h5>
          <!-- <h6>Year: {{ movie.Year }}</h6>
          <h6>ID: {{ movie.imdbID }}</h6> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.all-movies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
}
.single-movie-card {
  display: flex;
  flex-direction: column;
  border: 5px ridge rgba(0, 0, 0, 0.136);
  justify-content: space-between;
  background-color: rgb(23, 23, 23);
  color: rgb(238, 228, 228);
  max-width: 20%;
}
.single-movie-card:hover {
  border: 5px ridge rgba(121, 118, 118, 0.404);
  cursor: pointer;
}

.single-movie-card__img-container {
  max-width: 100%;
  height: auto;
}
.single-movie-card__img-container--img {
  filter: grayscale(100%);
  max-width: 100%;
  height: auto;
  transition: filter 0.5s;
}
.single-movie-card__img-container--img:hover {
  filter: grayscale(0%);
}
.single-movie-card__title-container {
  text-align: center;
  font-size: 1.5em;
}
</style>
