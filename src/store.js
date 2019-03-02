import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex, axios)

export default new vuex.Store({
    state: {
        movies: []
    },
    actions: {
        loadMovies({commit}) {
            axios
                .get('https://swapi.co/api/films')
                .then(response => {
                    let movies = response.data.results
                    commit('SET_MOVIES', movies)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mutations: {
        SET_MOVIES(state, movies) {
            state.movies= movies
        }
    }
})