<template>
    <div class="tab-pane fade" id="vehicles" role="tabpanel" aria-labelledby="vehicles-tab">
        <div class="star-wars-icon">
            <img src="../../assets/Death-Star-icon.png">
        </div>
        <table class="table table-bordered table-dark table-hover">
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
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";

export default {
    name: "ChildVehicles",
    data() {
        return {
            movieVehicles: []
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