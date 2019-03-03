<template>
    <div class="tab-pane fade" id="planets" role="tabpanel" aria-labelledby="planets-tab">
        <div class="star-wars-icon">
            <img src="../../assets/Darth-Vader-icon.png">
        </div>
        <table class="table table-bordered table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Clima</th>
                    <th scope="col">Gravidade</th>
                    <th scope="col">Água</th>
                    <th scope="col">População</th>
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
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";

export default {
    name: "ChildPlanets",
    data() {
        return {
            moviePlanets: []
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
            if (moviePlanetsUrls != null &&moviePlanetsUrls != "") {
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
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .finally(() => {});
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