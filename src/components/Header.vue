<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="logo">
                    <img src="../assets/star_wars_logo.png">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="header-title">
                    <h1>{{headerTitle}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            headerTitle: "May the Force be with you"
        }
    }
}
</script>

<style>
@font-face {
    font-family: StarWars;
    src: url(../../public/fonts/Death_Star.otf);
}
.logo img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 300px;
    max-height: 200px;
    margin-top: 20px;
}
.header-title h1{
    font-family: StarWars;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 40px;
    text-align: center;
}
</style>