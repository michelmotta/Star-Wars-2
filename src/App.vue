<template>
  <div id="app">
    <h1 v-for="(movie, index) in movies" :key="index">{{ movie.title }}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('loadMovies')
  },
  computed: {
    ...mapState([
      'movies'
    ])
  },
}
</script>

<style>

</style>
