<template>
  <input 
    type="text" 
    placeholder="Type to search..." 
    v-on:input="search"
  />
</template>

<script>
import { search } from '../api.js';

export default {
  name: 'SearchBar',
  methods: {
    search: function (event) {
      let query = event.target.value;
      search(query).then(
        results => { this.$root.$emit('search', { results, query }); }
      );
    }
  }
}
</script>

<style scoped>
  input {
    margin: 40px auto;
    width: 100%;
    font-size: 42px;
    color: rgba(255,255,255,0.8);
    background: transparent;
    border: none;
    border-bottom: 3px solid rgba(255,255,255,0.9);
    text-align: center;
  }

  input:focus {
    outline: none;
  }
</style>
