<template>
  <div id="movie">
    <div v-if="loading" class="loading">
      <!-- Loading state? -->
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="movie" class="backdrop" v-bind:style="backdropStyle"></div>

    <div class="content">
      <transition name="slide-up">
        <img v-if="movie" v-bind:src="movie.poster" class="poster" />
      </transition>

      <transition name="slide-left">
        <div v-if="movie">
          <h1>{{ movie.title }}</h1>
          <span class="rating"> ({{ movie.voteAverage }} / 10)</span>
          <p class="overview">{{ movie.overview }}</p>
          <h2>Facts</h2>
          <dl>
            <dt>Status: </dt>
            <dd>{{ movie.status}}</dd>

            <dt>Release date: </dt>
            <dd>{{ movie.releaseDate}}</dd>

            <dt>Budget: </dt>
            <dd>{{ movie.budget.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</dd>

            <dt>Genres: </dt>
            <dd>{{ movie.genres.join(', ') }}</dd>

            <dt>Revenue: </dt>
            <dd>{{ movie.revenue.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</dd>

            <dt>Runtime: </dt>
            <dd>{{ movie.runtime }} min</dd>
          </dl>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { getMovie } from '../api.js';

export default {
  name: 'Movie',
  data: () => ({
    loading: false,
    movie: null,
    error: null,
    backdropStyle: {}
  }),
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.movie = null
      this.loading = true
      getMovie(this.$route.params.id).then(response => {
        this.loading = false
        this.movie = response
        this.backdropStyle = { backgroundImage: 'url('+response.backdrop+')' }
      })
    }
  }
}
</script>

<style scoped>
  .content {
    display: flex;
    margin: 0 20px;
  }

  .backdrop {    
    background-size: cover;
    opacity: 0.04;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }

  .poster {
    width: 300px;
    min-width: 300px;
    margin-right: 40px;
    height: 100%;
  }

  .overview {
    font-size: 18px;
  }

  .rating {
    color: #999;
  }

  h1 {
    font-size: 40px;
    display: inline;
  }

  dt {
    font-weight: bold;
    display: inline;
  }

  dd {
    display: inline;
    margin-left: 0;
  }

  dd:after{
    display: block;
    content: '';
    height: 8px;
  }

  @media only screen and (max-width: 650px) {
    .content {
      flex-direction: column-reverse;
    }

    .poster {
      margin: 0 auto 20px;
      width: 90%;
    }

    .backdrop {    
      display: none;
    }
  }

  .slide-up-enter-active, .slide-up-leave-active,
  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .4s ease;
  }

  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }

  .slide-left-enter, .slide-left-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
