<template>
    <div class="container">
        <div class="row" v-for="i in Math.ceil(movies.length / 3)" :key="i">
            <div class="col-md-4 margin-top-30px" v-for="(movie, index) in movies.slice((i - 1) * 3, i * 3)" :key="index">
                <div class="list-item">
                    <div class="list-item-movie-image">
                        <img src="../../public/img/demo_star_wars.jpeg" class="img-fluid">
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
                        <button type="button" class="btn btn-dark btn-black" data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg" @click.prevent="loadMovieByUrl(movie.url)">Details</button>
                    </div>
                </div>
            </div>
        </div>
        <Modal></Modal>
    </div>    
</template>

<script>
import { mapState } from "vuex";
import Modal from './Modal'

export default {
    name: "Movies",
    components: {
        Modal
    },
  	mounted() {
    	this.$store.dispatch("loadMovies", 'https://swapi.py4e.com/api/films')
  	},
  	computed: {
    	...mapState(["movies"])
	},
	filters: {
        formateDate: function(str) {
            var date = new Date(str)
            let d  = date.getDate().toString().padStart(2, '0')
            let m  = (date.getMonth()+1).toString().padStart(2, '0')
            let y  = date.getFullYear()
            
            return m + "/" + d + "/" + y
        },
    },
    methods: {
        loadMovieByUrl(movieUrl) {
            this.$store.dispatch("loadMovie", movieUrl)
        }
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