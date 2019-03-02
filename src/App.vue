<template>
  	<div id="app">
    	<div class="container-fluid">
			<Header></Header>
      		<Movies></Movies>
			<Pagination></Pagination>
			<Footer></Footer>
    	</div>
  	</div>
</template>

<script>
import Header from "./components/Header"
import Movies from "./components/Movies"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"


export default {
  	name: "app",
  	components: {
		Header,
		Movies,
		Pagination,
		Footer
  	}
};
</script>