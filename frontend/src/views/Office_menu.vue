<template>
    <div id='office'>
        <div class="container">
            <div class="burger-menu mt-5">
                <span class='headline h1'>Organization.name</span>
                <div class="burger-box">
                    <button class="btn fs-18">
                        <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" class='button-img'>
                    </button>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-9 mt-xl-4 mb-xl-4 mt-2 mb-2">
                    <div class="card">
                        <div class="back-block"
                        v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                            <div class="link-header">
                                <span class='headline h1'>Офис</span>
                            </div>
                            <div class="link-image">
                                <img v-bind:src="require(`@/assets/img/Office_icon_re.png`)" class='img-fluid'>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-3 mt-xl-4 mb-xl-4 mt-2 mb-2">
                    <div class="card">
                        <div class="back-block"
                        v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                           <div class="link-header">
                                <span class='headline h1'>Профиль</span>
                            </div>
                            <div class="link-image">
                                <img v-bind:src="require(`@/assets/img/Profile_icon.svg`)" class='img-fluid'>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-5 mt-xl-4 mb-xl-4 mt-2 mb-2">
                    <div class="card">
                        <div class="back-block"
                        v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                           <div class="link-header">
                                <span class='headline h1'>Команда</span>
                            </div>
                            <div class="link-image">
                                <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" class='img-fluid'>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4 mt-xl-4 mb-xl-4 mt-2 mb-2">
                    <div class="card">
                        <div class="back-block"
                        v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                           <div class="link-header">
                                <span class='headline h1'>Чат</span>
                            </div>
                            <div class="link-image">
                                <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" class='img-fluid'>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-3 mt-xl-4 mb-xl-4 mt-2 mb-2">
                    <div class="row lowcard">
                        <div class="col-12 col-md-6 col-xl-12 mb-2 mb-xl-0">
                            <div class="card">
                                <div class="back-block"
                                v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                                    <div class="link-header">
                                        <span class='headline h1'>Лидеры</span>
                                    </div>
                                    <div class="link-image">
                                        <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" class='img-fluid'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-xl-2 mt-2 mt-md-0 col-md-6 col-xl-12">
                            <div class="card">
                                <div class="back-block"
                                v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                                    <div class="link-header">
                                        <span class='headline h1'>Справка</span>
                                    </div>
                                    <div class="link-image">
                                        <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" class='img-fluid'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #office{
        width: 100%;
    }
    .burger-menu{
        width:100%;
        display: flex;
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
    .card{
        height: 250px;
        position: relative;
        border: 1px solid #6E44FF;
        background-color: #6d44ff6b;
        border-radius: 10px;
    }
    .card:hover{
        background-color: #6d44ffbd;
        transition:ease-in 0.3s;
    }
    .lowcard .card{
        height: 120px;
    }
    .link-header{
        position: absolute;
        bottom: 15px;
        left: 15px;
    }
    .link-image{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .back-block{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
    }
    .card .link-image img{
        height: 175px;
    }
    .lowcard .card .link-image img{
        height: 70px;
    }
    @media screen and (max-width:1200px) {
        .lowcard .card, .card{
            height: 200px;
        }
        .lowcard .card .link-image img{
            height: 175px;
        }
    }
    @media screen and (max-width:990px) {
        .lowcard .card .link-image img, .card .link-image img{
            height: 150px;
        }
    }
    @media screen and (max-width:767px) {
        .lowcard .card .link-image img, .card .link-image img{
            height: 175px;
        }
    }
</style>