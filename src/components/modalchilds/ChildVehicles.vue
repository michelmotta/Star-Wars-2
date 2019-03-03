<template>
    <div class="tab-pane fade" id="vehicles" role="tabpanel" aria-labelledby="vehicles-tab">
        <div class="star-wars-icon">
            <img src="../../../public/img/Death-Star-icon.png">
        </div>
        <Loading v-if="loadingMovieInfoStatus"></Loading>
        <div class="table-responsive">
            <table class="table table-bordered table-dark table-hover" v-if="!loadingMovieInfoStatus">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Crew</th>
                        <th scope="col">Vehicle Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movieVehicle, index) in movieVehicles" :key="index">
                        <th>{{movieVehicle.name}}</th>
                        <td>{{movieVehicle.model}}</td>
                        <td>{{movieVehicle.manufacturer}}</td>
                        <td>{{movieVehicle.crew}}</td>
                        <th>{{movieVehicle.vehicle_class}}</th>
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
    name: "ChildVehicles",
    components: {
        Loading
    },
    data() {
        return {
            movieVehicles: [],
            loadingMovieInfoStatus: false,
            counter: 0
        };
    },
    computed: {
        ...mapState(["movie", "currentMovieTab"])
    },
    watch: {
        currentMovieTab(newCurrentMovieTab, oldCurrentMovieTab) {
            if (this.currentMovieTab == "vehicles") {
                this.loadMovieVehicles(this.movie.vehicles);
            }
        }
    },
    methods: {
        loadMovieVehicles(movieVehiclesUrls) {
            if (movieVehiclesUrls != null && movieVehiclesUrls != "") {
                this.loadingMovieInfoStatus = true
                this.counter = 0;
                this.movieVehicles = []
                movieVehiclesUrls.forEach(movieVehiclesUrl => {
                    axios
                        .get(movieVehiclesUrl)
                        .then(response => {
                            let movieVehicle = {
                                name: response.data.name,
                                model: response.data.model,
                                manufacturer: response.data.manufacturer,
                                crew: response.data.crew,
                                vehicle_class: response.data.vehicle_class
                            };

                            this.movieVehicles.push(movieVehicle);
                            this.counter++;
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .finally(() => {
                            if(this.counter == movieVehiclesUrls.length) {
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