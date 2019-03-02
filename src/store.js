import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex, axios)

export default new vuex.Store({
    state: {
        movies: [],
        prevPage: null,
        nextPage: null
    },
    actions: {
        loadMovies({commit}) {
            axios
                .get('https://swapi.co/api/films')
                .then(response => {
                    let movies = response.data.results
                    let prevPage = response.data.previous
                    let nextPage = response.data.next
                    commit('SET_MOVIES', {movies, prevPage, nextPage})
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mutations: {
        SET_MOVIES(state, {movies, prevPage, nextPage}) {
            state.movies = movies
            state.prevPage = prevPage
            state.nextPage = nextPage
        }
    }
})