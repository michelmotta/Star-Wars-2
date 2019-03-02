<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <nav>
                    <ul class="pagination pagination-lg justify-content-center">
                        <li class="page-item" :class="prevPageUrl == null ? 'disabled' : ''">
                            <a class="page-link" href="#" @click.prevent="loadPrevPageUrl(prevPageUrl)">Next</a>
                        </li>
                        <li class="page-item" :class="nextPageUrl == null ? 'disabled' : ''">
                            <a class="page-link" href="#" @click.prevent="loadNextPageUrl(nextPageUrl)">Prev</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'Pagination',
  	computed: {
    	...mapState(['prevPageUrl', 'nextPageUrl'])
    },
    methods: {
        loadPrevPageUrl(prevPageUrl) {
            this.$store.dispatch("loadMovies", prevPageUrl)
            console.log('1')
        },
        loadNextPageUrl(nextPageUrl) {
            this.$store.dispatch("loadMovies", nextPageUrl)
            console.log('2')
        }
    }
}
</script>

<style>
.pagination{
    margin-top: 50px;
}
</style>