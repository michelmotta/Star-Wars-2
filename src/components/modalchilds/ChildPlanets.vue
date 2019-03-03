<template>
    <div class="tab-pane fade" id="planets" role="tabpanel" aria-labelledby="planets-tab">
        <div class="star-wars-icon">
            <img src="../../assets/Darth-Vader-icon.png">
        </div>
        <Loading v-if="loadingMovieInfoStatus"></Loading>
        <div class="table-responsive">
            <table class="table table-bordered table-dark table-hover" v-if="!loadingMovieInfoStatus">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Climate</th>
                        <th scope="col">Gravity</th>
                        <th scope="col">Surface Water</th>
                        <th scope="col">Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(moviePlanet, index) in moviePlanets" :key="index">
                        <th>{{moviePlanet.name}}</th>
                        <td>{{moviePlanet.climate}}</td>
                        <td>{{moviePlanet.gravity}}</td>
                        <td>{{moviePlanet.surface_water | formateWaterInfo()}}</td>
                        <th>{{moviePlanet.population}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Loading from '../Loading'
import axios from 'axios'
import { mapState } from "vuex";

export default {
    name: "ChildPlanets",
    components: {
        Loading
    },
    data() {
        return {
            moviePlanets: [],
            loadingMovieInfoStatus: false,
            counter: 0
        };
    },
    computed: {
        ...mapState(["movie", "currentMovieTab"])
    },
    filters: {
        formateWaterInfo(str) {
            if(str == 1){
                return "Yes";
            } else {
                return "No"
            }
        }
    },
    watch: {
        currentMovieTab(newCurrentMovieTab, oldCurrentMovieTab) {
            if (this.currentMovieTab == "planets") {
                this.loadMoviePlanets(this.movie.planets);
            }
        }
    },
    methods: {
        loadMoviePlanets(moviePlanetsUrls) {
            if (moviePlanetsUrls != null && moviePlanetsUrls != "") {
                this.loadingMovieInfoStatus = true
                this.counter = 0;
                this.moviePlanets = []
                moviePlanetsUrls.forEach(moviePlanetsUrl => {
                    axios
                        .get(moviePlanetsUrl)
                        .then(response => {
                            let moviePlanet = {
                                name: response.data.name,
                                climate: response.data.climate,
                                gravity: response.data.gravity,
                                surface_water: response.data.surface_water,
                                population: response.data.population
                            };

                            this.moviePlanets.push(moviePlanet);
                            this.counter++;
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .finally(() => {
                            if(this.counter == moviePlanetsUrls.length) {
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
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>