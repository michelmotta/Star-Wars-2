<template>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{movie.title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a @click.prevent="setCurrentMovieTab('characters')" class="nav-link active" id="characters-tab" data-toggle="tab" href="#characters" role="tab" aria-controls="characters" aria-selected="true">Personagens</a>
                                </li>
                                <li class="nav-item">
                                    <a @click.prevent="setCurrentMovieTab('planets')" class="nav-link" id="planets-tab" data-toggle="tab" href="#planets" role="tab" aria-controls="planets" aria-selected="false">Planetas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="species-tab" data-toggle="tab" href="#species" role="tab" aria-controls="species" aria-selected="false">Espécies</a>
                                </li>
                                <li class="nav-item">
                                    <a  class="nav-link" id="starships-tab" data-toggle="tab" href="#starships" role="tab" aria-controls="starships" aria-selected="false">Naves</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="vehicles-tab" data-toggle="tab" href="#vehicles" role="tab" aria-controls="vehicles" aria-selected="false">Veículos</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <ChildCharacters></ChildCharacters>
                                <ChildPlanets></ChildPlanets>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import ChildCharacters from './modalchilds/ChildCharacters'
import ChildPlanets from './modalchilds/ChildPlanets'

export default {
    name: 'Modal',
    components: {
        ChildCharacters,
        ChildPlanets
    },
    computed: {
    	...mapState(["movie"])
	},
    methods: {
       setCurrentMovieTab(currentMovieTab) {
           this.$store.dispatch("updateCurentMovieTab", currentMovieTab)
       }
    }
}
</script>

<style>
.modal-title{
    font-family: StarWars;
    color: #fff;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #efff00;
    background-color: #000;
    border-color: #dee2e6 #dee2e6 #000;
}
.nav-item a{
    color: #fff;
}
.close{
    opacity: 1;
    color: #fff;
}
.modal-content{
    border: 2px solid #fff;
}
.table-dark{
    background: transparent;
}
.close {
    color: #fff !important;
    opacity: 1 !important;
}
</style>