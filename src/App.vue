<template>
  	<div id="app">
    	<div class="container-fluid">
			<Header></Header>
      		<h1 v-for="(movie, index) in movies" :key="index">{{ movie.title }}</h1>
    	</div>
  	</div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header";

export default {
  	name: "app",
  	components: {
    	Header
  	},
  	mounted() {
    	this.$store.dispatch("loadMovies");
  	},
  	computed: {
    	...mapState(["movies"])
  	}
};
</script>