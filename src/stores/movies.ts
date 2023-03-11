import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
interface ResponseFromDatabase {
  Search: MovieType[];
  totalResults: string;
  Response: string
}
interface MovieType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useGetMoviesStore = defineStore('moviesGetter', {
  state: () => ({
    movies: [] as MovieType[],
  }),
  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
  actions: {
    async fetchMovies() {
      try {
        const { data } = await axios.get(
          'https://www.omdbapi.com/?s=Harry+Potter&page=1&apikey=95dc70d&'
        );
        this.movies = data.Search;
        console.log(this.movies);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
