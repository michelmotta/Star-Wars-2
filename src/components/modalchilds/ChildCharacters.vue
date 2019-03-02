<template>
    <div class="tab-pane fade show active" id="characters" role="tabpanel" aria-labelledby="characters-tab">
        <div class="star-wars-icon">
            <img src="../../assets/Master-Joda-icon.png">
        </div>
        <table class="table table-bordered table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Height</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Hair</th>
                    <th scope="col">Skin</th>
                    <th scope="col">Eyes</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movieCharacter, index) in movieCharacters" :key="index">
                    <th>{{movieCharacter.name}}</th>
                    <td>{{movieCharacter.height}}</td>
                    <td>{{movieCharacter.mass}}</td>
                    <td>{{movieCharacter.hair_color}}</td>
                    <th>{{movieCharacter.skin_color}}</th>
                    <td>{{movieCharacter.eye_color}}</td>
                    <td>{{movieCharacter.gender}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";

export default {
    name: "ModalChildCharacters",
    data() {
        return {
            movieCharacters: []
        };
    },
    computed: {
        ...mapState(["movie", "currentMovieTab"])
    },
    watch: {
        currentMovieTab(newCurrentMovieTab, oldCurrentMovieTab) {
            if (this.currentMovieTab == "characters") {
                this.loadMovieCharacters(this.movie.characters);
            }
        }
    },
    methods: {
        loadMovieCharacters(movieCharactersUrls) {
            if (movieCharactersUrls != null && movieCharactersUrls != "") {
                movieCharactersUrls.forEach(movieCharactersUrl => {
                    axios
                        .get(movieCharactersUrl)
                        .then(response => {
                            var movieCharacter = {
                                name: response.data.name,
                                height: response.data.height,
                                mass: response.data.mass,
                                hair_color: response.data.hair_color,
                                skin_color: response.data.skin_color,
                                eye_color: response.data.eye_color,
                                gender: response.data.gender
                            };
                            this.movieCharacters.push(movieCharacter);
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
