import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import SearchBarVue from '@/components/SearchBar.vue';
interface ResponseFromDatabase {
  Search: MovieType[];
  totalResults: string;
  Response: string;
}
interface MovieType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export const useMoviesStore = defineStore('moviesGetter', {
  state: () => ({
    totalResults: '',
    totalPages:1,
    currentPage: '1',
    isLoading: false,
    title: 'Friends',
    APIkey: '95dc70d',
    movies: [] as MovieType[],
    page: 1,
  }),

  getters: {
    getMovies(state) {
      return state.movies;
    },
  },

  actions: {
    async fetchMovies() {
      try {
        const { data } = await axios.get<ResponseFromDatabase>(
          `https://www.omdbapi.com/?s=${this.title}&page=${this.page}&apikey=${this.APIkey}&`
        );
        this.totalResults = data.totalResults;
        console.log(this.totalResults);

        this.movies = data.Search;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    getNumberOfMovies() {
      console.log(this.totalResults);
      return this.totalResults;
    },
    getNumberOfPages() {
      this.totalPages=Math.ceil(+this.totalResults/10);
      return this.totalPages;
    },
    increasePage() {
      this.page++;
    },
    decreasePage() {
      this.page-- ;
    },
  },
});
