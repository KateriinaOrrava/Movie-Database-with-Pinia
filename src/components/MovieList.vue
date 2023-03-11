<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useMoviesStore } from '@/stores/movies';
const store = useMoviesStore();
const movies = computed(() => {
  return store.movies;
});
onMounted(() => {
  store.fetchMovies();
});

function handleClick(imdb:string){
  console.log(imdb)
}
</script>

<template>
  <div></div>
  <div>
    <div class="all-movies">
      <div
        v-for="movie in movies"
        :key="movie.imdbID"
        class="single-movie-card"
      >
        <div class="single-movie-card__img-container"  @click="handleClick(movie.imdbID)">
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
