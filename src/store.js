import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex, axios)

export default new vuex.Store({
    state: {
        movies: [],
        movie: {},
        currentMovieTab: null,
        prevPageUrl: null,
        nextPageUrl: null,
        loadingStatus: false,
        movieLoadingStatus: false
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
        },
        loadMovie({commit}, movieUrl) {
            commit('SET_LOADING_MOVIE', true)
            axios
                .get(movieUrl)
                .then(response => {
                    let movie = response.data
                    commit('SET_LOADING_MOVIE', false)
                    commit('SET_MOVIE', movie)
                    commit('SET_CURRENT_MOVIE_TAB', "characters")
                })
                .catch(error => {
                    console.log(error)
                })
        },
        updateCurrentMovieTab({commit}, currentMovieTab) {
            commit('SET_CURRENT_MOVIE_TAB', currentMovieTab)
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
        },
        SET_MOVIE(state, movie) {
            state.movie = movie
        },
        SET_CURRENT_MOVIE_TAB(state, currentMovieTab) {
            state.currentMovieTab = currentMovieTab
        },
        SET_LOADING_MOVIE(state, movieLoadingStatus) {
            state.movieLoadingStatus = movieLoadingStatus
        }
    }
})