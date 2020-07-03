<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <form class="card card-sm">
                    <div class="card-body row no-gutters align-items-center">
                        <div class="col-auto">
                            <i class="fa fa-search h4 text-body"></i>
                        </div>
                        <div class="col">
                            <input v-model="searchTerm" class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Star Wars movies by name">
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-lg btn-dark btn-black" type="submit" @click.prevent="searchMovieByName()">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        searchMovieByName() {
            this.$store.dispatch("loadMovies", 'https://swapi.py4e.com/api/films/?search=' + this.searchTerm)
        }
    }
}
</script>

<style>
.card{
    border-radius: 7px;
}
.form-control-borderless {
    border: none;
}
.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
.fa-search{
    font-size: 30px;
}
.btn-black{
    background: black;
}
</style>
