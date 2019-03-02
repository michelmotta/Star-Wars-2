import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex, axios)

export default new vuex.Store({
    state: {
        movies: [],
        prevPageUrl: null,
        nextPageUrl: null,
        loadingStatus: false
    },
    actions: {
        loadMovies({commit}, requestApiUrl) {
            commit('SET_LOADING', true)
            axios
                .get(requestApiUrl)
                .then(response => {
                    let movies = response.data.results
                    let prevPageUrl = response.data.previous
                    let nextPageUrl = response.data.next
                    commit('SET_LOADING', false)
                    commit('SET_MOVIES', {movies, prevPageUrl, nextPageUrl})
                })
                .catch(error => {
                    console.log(error)
                })
        },
        orderMoviesBy({commit}, orderType) {
            commit('SET_MOVIES_ORDER_BY', orderType)
        }
    },
    mutations: {
        SET_MOVIES(state, {movies, prevPageUrl, nextPageUrl}) {
            state.movies = movies
            state.prevPageUrl = prevPageUrl
            state.nextPageUrl = nextPageUrl
        }, 
        SET_LOADING(state, loadingStatus) {
            state.loadingStatus = loadingStatus
        },
        SET_MOVIES_ORDER_BY(state, orderType) {
            if(orderType == "name"){
                state.movies.sort((a, b) => (a.title > b.title) ? 1 : -1)
            }
            if(orderType == "date"){
                state.movies.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1)
            }
        }
    }
})