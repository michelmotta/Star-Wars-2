<template>
    <div class="container">
        <div class="row" v-for="i in Math.ceil(movies.length / 3)" :key="i">
            <div class="col-md-4 margin-top-30px" v-for="(movie, index) in movies.slice((i - 1) * 3, i * 3)" :key="index">
                <div class="list-item">
                    <div class="list-item-movie-image">
                        <img src="../assets/demo_star_wars.jpeg" class="img-fluid">
                    </div>
                    <div class="list-item-text">
                        <span class="badge badge-secondary">Movie</span>
                        <p>{{movie.title}}</p>
                    </div>
                    <hr>
                    <div class="list-item-text">
                        <span class="badge badge-secondary">Release Date</span>
                        <p>{{movie.release_date | formateDate()}}</p>
                    </div>
                    <hr>
                    <div class="list-item-text">
                        <span class="badge badge-secondary">Director</span>
                        <p>{{movie.director}}</p>
                    </div>
                    <hr>
                    <div class="list-item-text">
                        <span class="badge badge-secondary">Opening Crawl</span>
                        <p class="list-item-text-synopsis">{{movie.opening_crawl}}</p>
                    </div>
                    <div class="list-item-button">
                        <button type="button" class="btn btn-dark btn-black" data-toggle="modal" data-target=".bd-example-modal-lg">Ver Detalhes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import { mapState } from "vuex";

export default {
  	name: "Movies",
  	mounted() {
    	this.$store.dispatch("loadMovies")
  	},
  	computed: {
    	...mapState(["movies"])
  	}
};
</script>

<style>
.margin-top-30px{
    margin-top: 30px;
}
.list-item{
    background: #fff;
    padding: 10px;
    box-shadow: 0px 0px 15px #fff;
    border-radius: 5px;
}
.list-item-text{
    text-align: center;
}
.list-item-text span{
    font-family: 'Roboto', sans-serif;
}
.list-item-text p{
    font-family: xolonium_regular;
    font-size: 20px;
    margin-bottom: 5px;
}
.list-item-text-synopsis{
    font-size: 16px !important;
    text-align: justify;
    line-height: 22px;
}
.list-item-movie-image img{
    max-height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}
.list-item-button{
    margin-top: 20px;
    text-align: center;
}    
.badge-secondary{
    color: #efff01;
    background-color: #000000;
}
</style>