<template>
  <transition name="fade">
    <ul v-if="list.length > 0">
      <li v-for="movie in list" v-bind:key="movie.id">
        <router-link :to="'/movie/' + movie.id">{{ movie.title }}</router-link>
      </li>
    </ul>
  </transition>
</template>

<script>
export default { 
  name: 'MovieList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  font-size: 20px;
  margin: 0 50px 20px 0;
  display: inline-block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
