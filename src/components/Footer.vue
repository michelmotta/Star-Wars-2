<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="footer">
                        <p>Developed with <i class="fa fa-heart"></i> by {{ author }}.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            author: "Michel Motta da Silva"
        }
    }
}
</script>

<style>
.footer{
    margin-top: 30px;
}
.footer p{
    color: #fff;
    text-align: center;
}
.footer i{
    color: rgb(248, 3, 195);
}
</style>