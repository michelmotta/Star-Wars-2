<template>
    <div class="tab-pane fade" id="species" role="tabpanel" aria-labelledby="species-tab">
        <div class="star-wars-icon">
            <img src="../../assets/R2D2-icon.png">
        </div>
        <Loading v-if="loadingMovieInfoStatus"></Loading>
        <div class="table-responsive">
            <table class="table table-bordered table-dark table-hover" v-if="!loadingMovieInfoStatus">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Classification</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Average Lifespan</th>
                        <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movieSpecie, index) in movieSpecies" :key="index">
                        <th>{{movieSpecie.name}}</th>
                        <td>{{movieSpecie.classification}}</td>
                        <td>{{movieSpecie.designation}}</td>
                        <td>{{movieSpecie.average_lifespan}}</td>
                        <th>{{movieSpecie.language}}</th>
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
    name: "ChildSpecies",
    components: {
        Loading
    },
    data() {
        return {
            movieSpecies: [],
            loadingMovieInfoStatus: false,
            counter: 0
        };
    },
    computed: {
        ...mapState(["movie", "currentMovieTab"])
    },
    watch: {
        currentMovieTab(newCurrentMovieTab, oldCurrentMovieTab) {
            if (this.currentMovieTab == "species") {
                this.loadMovieSpecies(this.movie.species);
            }
        }
    },
    methods: {
        loadMovieSpecies(movieSpeciesUrls) {
            if (movieSpeciesUrls != null && movieSpeciesUrls != "") {
                this.loadingMovieInfoStatus = true
                this.counter = 0;
                this.movieSpecies = []
                movieSpeciesUrls.forEach(movieSpeciesUrl => {
                    axios
                        .get(movieSpeciesUrl)
                        .then(response => {
                            let movieSpecie = {
                                name: response.data.name,
                                classification: response.data.classification,
                                designation: response.data.designation,
                                average_lifespan: response.data.average_lifespan,
                                language: response.data.language
                            };

                            this.movieSpecies.push(movieSpecie);
                            this.counter++;
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .finally(() => {
                            if(this.counter == movieSpeciesUrls.length) {
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