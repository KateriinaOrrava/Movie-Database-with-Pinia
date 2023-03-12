<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useMoviesStore } from '@/stores/movies';
import { RouterLink } from 'vue-router';
const store = useMoviesStore();
const movies = computed(() => {
  return store.movies;
});
onMounted(() => {
  store.fetchMovies();
});
function getSingleMovieInfo() {
  store.fetchSingleMovie();
}
function handleClick(imdb: string) {
  console.log(imdb);
  store.singleImdbID = imdb;
  console.log('store imdb', store.singleImdbID);
  getSingleMovieInfo();
}
function handleNextPage() {
  store.increasePage();
  store.fetchMovies();
}
function handlePreviousPage() {
  store.decreasePage();
  store.fetchMovies();
}
</script>

<template>
  <div>
    <div class="movie-list-container">
      <div class="movie-list-container__pagination">
        <button
          @click="handlePreviousPage()"
          :disabled="store.page <= 1 ? true : false"
          class="movie-list-container__pagination--button"
        >
          previous
        </button>
        <p>Page {{ store.page }} of {{ store.getNumberOfPages() }}</p>
        <button
          @click="handleNextPage()"
          :disabled="store.page < +store.getNumberOfPages() ? false : true"
          class="movie-list-container__pagination--button"
        >
          next
        </button>
      </div>
      <br />

      <div class="movie-list-container__all-movies">
        <div
          v-for="movie in movies"
          :key="movie.imdbID"
          class="single-movie-card"
        >
          <RouterLink to="/movie">
            <div
              class="single-movie-card__img-container"
              @click="handleClick(movie.imdbID)"
            >
              <img
                :src="movie.Poster"
                alt="movie.Title"
                class="single-movie-card__img-container--img"
              />
            </div>
            <div class="single-movie-card__title-container">
              <h5>{{ movie.Title }}</h5>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.movie-list-container__pagination--button {
  background-color: #00bd7e;
  color: white;
  text-transform: uppercase;
  padding: 10px;
  border: none;
  border-radius: 20px;
}
.movie-list-container__pagination--button:disabled {
  background-color: #424443;
}
.movie-list-container {
  background-color: #ffe064;
  padding: 5px;
  border-radius: 10px;
}
.movie-list-container__pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}
.movie-list-container__all-movies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
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
