<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="logo">
                    <img src="../../public/img/star_wars_logo.png">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="header-title">
                    <h1 class="glow">{{headerTitle}}</h1>
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
.glow {
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #fc2c2c, 0 0 40px #fc2c2c, 0 0 50px #fc2c2c, 0 0 60px #fc2c2c, 0 0 70px #fc2c2c, 0 0 80px #fc2c2c;
  }
}
</style>