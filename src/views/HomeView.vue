<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import { ref, onMounted, computed } from 'vue';
import MovieListVue from '@/components/MovieList.vue';
import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <SearchBar></SearchBar>
  <MovieListVue></MovieListVue>
</template>
