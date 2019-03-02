<template>
  	<div id="app">
    	<div class="container-fluid">
			<Header></Header>
			<Search></Search>
      		<Movies></Movies>
			<Pagination></Pagination>
			<Footer></Footer>
    	</div>
  	</div>
</template>

<script>
import Header from "./components/Header"
import Search from "./components/Search"
import Movies from "./components/Movies"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"


export default {
  	name: "app",
  	components: {
		Header,
		Search,
		Movies,
		Pagination,
		Footer
  	}
};
</script>