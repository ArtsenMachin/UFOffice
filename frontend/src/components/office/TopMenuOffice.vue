<template>
<div class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="nav-block">
                    <div class="brand-div logo">
                        <span class='h2'>UF<span class='color-green'>O</span>ffice</span>
                    </div>
                    <div class="org-div text-center d-sm-flex d-none">
                        <span class='h2'>{{orgname}}</span>
                    </div>  
                    <div class="burger-box">
                        <router-link :to="({path: '/office_menu'})">
                            <button class="btn fs-18">
                                <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" class='button-img'>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 text-center d-block d-sm-none">
                 <span class='h2'>{{orgname}}</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:['orgname']
}
</script>
<style scoped>
    .nav-block{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .button-img{
        height: 65px;
        border: 1px dotted #6E44FF;
        border-radius: 10px;
    }
    .button-img:hover{
        background-color: #6d44ffa2;
    }
    .container-fluid{
        background-color: #6d44ff6b;
        border-bottom: 1px solid #6E44FF;
    }
</style>