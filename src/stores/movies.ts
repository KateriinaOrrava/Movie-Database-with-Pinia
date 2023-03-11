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
    searchMovie: '',
    page: '1',
    isLoading: false,
    title: 'Friends',
    APIkey: '95dc70d',
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
        const { data } = await axios.get<ResponseFromDatabase>(
          `https://www.omdbapi.com/?s=${this.title}&page=${this.page}&apikey=${this.APIkey}&`
        );
        this.movies = data.Search;
        console.log(this.movies);
        console.log('searching for movie:', this.searchMovie);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    // async findMovies(movieToFind: string) {
    //   try {
    //     const { data } = await axios.get<ResponseFromDatabase>(
    //       `https://www.omdbapi.com/?s=${movieToFind}&page=${this.page}&apikey=${this.APIkey}&`
    //     );
    //     this.movies = data.Search;
    //     console.log('searched', movieToFind);
    //   } catch (error) {
    //     alert(error);
    //     console.log(error);
    //   }
    // },
  },
});
