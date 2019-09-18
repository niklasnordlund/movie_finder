<template>
  <div id="home">
    <SearchBar />
    <SearchResult v-if="searching" />
    <TopList v-else />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import SearchResult from '../components/SearchResult.vue'
import TopList from '../components/TopList.vue'

export default {
  name: 'home',
  data: () => ({
    searching: false,
  }),
  components: {
    SearchBar,
    SearchResult,
    TopList,
  },
  mounted() { 
    this.$root.$on('search', search => {
      this.searching = search.query.length > 0;
    }); 
  }
}
</script>
