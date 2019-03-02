import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex, axios)

export default new vuex.Store({
    state: {
        movies: [],
        prevPageUrl: null,
        nextPageUrl: null
    },
    actions: {
        loadMovies({commit}, requestApiUrl) {
            axios
                .get(requestApiUrl)
                .then(response => {
                    let movies = response.data.results
                    let prevPageUrl = response.data.previous
                    let nextPageUrl = response.data.next
                    commit('SET_MOVIES', {movies, prevPageUrl, nextPageUrl})
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mutations: {
        SET_MOVIES(state, {movies, prevPageUrl, nextPageUrl}) {
            state.movies = movies
            state.prevPageUrl = prevPageUrl
            state.nextPageUrl = nextPageUrl
        }
    }
})