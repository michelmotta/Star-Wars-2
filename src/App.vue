<template>
  	<div id="app">
    	<div class="container-fluid">
			<Header></Header>
      		<Movies></Movies>
			<Footer></Footer>
    	</div>
  	</div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import Movies from "./components/Movies"

export default {
  	name: "app",
  	components: {
		Header,
		Footer,
		Movies
  	}
};
</script>