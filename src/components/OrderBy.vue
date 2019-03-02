<template>
    <div class="container">
        <div class="row">
            <div class="col-md-9"></div>
            <div class="col-md-3">
                <div class="input-group sort">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Order By</label>
                    </div>
                    <select @change="onSelectChange($event)" class="custom-select glowing-border" id="inputGroupSelect01">
                        <option value="null" selected>Choose...</option>
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderBy',
    methods: {
        onSelectChange(event) {
            if(event.target.value != 'null'){
                this.$store.dispatch("orderMoviesBy", event.target.value)
            }
        }
    }
}
</script>

<style>
.sort{
    margin-top: 20px;
}
.glowing-border {
    border: 2px solid #dadada;
    border-radius: 7px;
}
.glowing-border:focus { 
    outline: none;
    border-color: #fff;
    box-shadow: 0 0 30px #00eeff;
}    
</style>