<template>
  <div>
    <h2>Search results</h2>
    <MovieList v-bind:list="search.results" />
    <p v-if="search.results.length === 0">
      No results found for {{ search.query }}
    </p>
  </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'

export default { 
  name: 'SearchResult',
  data: () => ({
    search: { results: [], query: null },
  }),
  components: {
    MovieList
  },
  mounted() { 
    this.$root.$on('search', search => {
      this.search = search;
    }); 
  }
}
</script>
