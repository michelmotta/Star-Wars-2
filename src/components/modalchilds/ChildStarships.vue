<template>
    <div class="tab-pane fade" id="starships" role="tabpanel" aria-labelledby="starships-tab">
        <div class="star-wars-icon">
            <img src="../../assets/Clone-Trooper-icon.png">
        </div>
        <Loading v-if="loadingMovieInfoStatus"></Loading>
        <table class="table table-bordered table-dark table-hover" v-if="!loadingMovieInfoStatus">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Fabricante</th>
                    <th scope="col">Tripulação</th>
                    <th scope="col">Classe</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movieStarship, index) in movieStarships" :key="index">
                    <th>{{movieStarship.name}}</th>
                    <td>{{movieStarship.model}}</td>
                    <td>{{movieStarship.manufacturer}}</td>
                    <td>{{movieStarship.crew}}</td>
                    <th>{{movieStarship.starship_class}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Loading from '../Loading'
import axios from 'axios'
import { mapState } from "vuex";

export default {
    name: "ChildStarships",
    components: {
        Loading
    },
    data() {
        return {
            movieStarships: [],
            loadingMovieInfoStatus: false,
            counter: 0
        };
    },
    computed: {
        ...mapState(["movie", "currentMovieTab"])
    },
    watch: {
        currentMovieTab(newCurrentMovieTab, oldCurrentMovieTab) {
            if (this.currentMovieTab == "starships") {
                this.loadMovieStarships(this.movie.starships);
            }
        }
    },
    methods: {
        loadMovieStarships(movieStarshipsUrls) {
            if (movieStarshipsUrls != null && movieStarshipsUrls != "") {
                this.loadingMovieInfoStatus = true
                this.counter = 0;
                this.movieStarships = []
                movieStarshipsUrls.forEach(movieStarshipsUrl => {
                    axios
                        .get(movieStarshipsUrl)
                        .then(response => {
                            let movieStarship = {
                                name: response.data.name,
                                model: response.data.model,
                                manufacturer: response.data.manufacturer,
                                crew: response.data.crew,
                                starship_class: response.data.starship_class
                            };

                            this.movieStarships.push(movieStarship);
                            this.counter++;
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .finally(() => {
                            if(this.counter == movieStarshipsUrls.length) {
                                this.loadingMovieInfoStatus = false;
                            }
                        });
                    });
                }
        }
    }
};
</script>

<style>
.star-wars-icon img {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>