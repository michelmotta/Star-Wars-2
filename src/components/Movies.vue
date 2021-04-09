<template>
    <div class="container">
        <div class="row" v-for="i in Math.ceil(movies.length / 3)" :key="i">
            <div class="col-4 margin-top-30px" v-for="(movie, index) in movies.slice((i - 1) * 3, i * 3)" :key="index">
                <div class="card">
                    <img src="../../public/img/demo_star_wars.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">{{movie.title}}</h5>
                        <p class="card-text">{{movie.opening_crawl}}</p>
                    </div>
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item"><span class="fs-6">Release Date</span> <br> <span class="fs-5">{{movie.release_date | formateDate()}}</span></li>
                        <li class="list-group-item"><span class="fs-6">Director</span> <br> <span class="fs-5">{{movie.director}}</span></li>
                    </ul>
                    <div class="card-body text-center">
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
.card-title{
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 20px;
}
.card-text{
    height: 120px;
    overflow: auto;
}
</style>