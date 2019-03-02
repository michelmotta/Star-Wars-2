<template>
  	<div id="app">
    	<div class="container-fluid">
			<Header></Header>
			<Loading v-show="loadingStatus"></Loading>
			<Search v-show="!loadingStatus"></Search>
      		<Movies v-show="!loadingStatus"></Movies>
			<Pagination v-show="!loadingStatus"></Pagination>
			<Footer></Footer>
    	</div>
  	</div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header"
import Loading from "./components/Loading"
import Search from "./components/Search"
import Movies from "./components/Movies"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"


export default {
  	name: "app",
  	components: {
		Header,
		Loading,
		Search,
		Movies,
		Pagination,
		Footer
  	},
  	computed: {
    	...mapState(["loadingStatus"])
	}
};
</script>