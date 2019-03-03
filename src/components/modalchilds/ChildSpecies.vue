<template>
    <div class="tab-pane fade" id="species" role="tabpanel" aria-labelledby="species-tab">
        <div class="star-wars-icon">
            <img src="../../assets/R2D2-icon.png">
        </div>
        <table class="table table-bordered table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Classificação</th>
                    <th scope="col">Designação</th>
                    <th scope="col">Tempo de vida</th>
                    <th scope="col">Idioma</th>
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
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";

export default {
    name: "ChildSpecies",
    data() {
        return {
            movieSpecies: []
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