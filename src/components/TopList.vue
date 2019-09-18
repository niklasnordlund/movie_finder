<template>
  <div>
    <h2>Popular movies</h2>
    <MovieList v-bind:list="topList" />
  </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import { getTopList } from '../api.js';

export default { 
  name: 'TopList',
  data: () => ({
    topList: [],
  }),
  components: {
    MovieList
  },
  mounted() { 
    getTopList().then(response => { 
      this.topList = response;
    });
  }
}
</script>
