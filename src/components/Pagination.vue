<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <nav>
                    <ul class="pagination pagination-lg justify-content-center">
                        <li class="page-item" :class="prevPage == null ? 'disabled' : ''">
                            <a class="page-link"  :href="prevPage">Next</a>
                        </li>
                        <li class="page-item" :class="nextPage == null ? 'disabled' : ''">
                            <a class="page-link" :href="nextPage">Prev</a>
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
    	...mapState(['prevPage', 'nextPage'])
  	}
}
</script>

<style>
.pagination{
    margin-top: 50px;
}
</style>