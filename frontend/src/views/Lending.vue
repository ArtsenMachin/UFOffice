<template>
    <div id='lending' class='mb-5'>
        <div class="first-block"
         v-bind:style="`background: url(${require('@/assets/img/back.png')}) no-repeat`">
         <div class="anim-elements">
             <div class="anim-element"
             v-bind:style="`background: url(${require('@/assets/img/Back_1.png')}) no-repeat`"></div>
             <div class="anim-element"
             v-bind:style="`background: url(${require('@/assets/img/Back_2.png')}) no-repeat`"></div>
             <div class="anim-element"
             v-bind:style="`background: url(${require('@/assets/img/Back_5.png')}) no-repeat`"></div>
             <div class="anim-element"
             v-bind:style="`background: url(${require('@/assets/img/Back_4.png')}) no-repeat`"></div>
             <div class="anim-element"
             v-bind:style="`background: url(${require('@/assets/img/Back_3.png')}) no-repeat`"></div>
         </div>
            <div class="container">
                <div class="navigation">
                    <div class="brand-block">
                        <router-link class="logo" to='/'>
                            <div class="brand-div">
                                    <span class='h2'>&nbsp;UF<span class='color-green'>O</span>ffice</span>
                            </div>
                        </router-link>
                    </div>
                    <ul class="nav-block d-none d-xl-flex">
                        <li class="nav-item fs-18"><a href='#home' class='h4'>Главная</a></li>
                        <li class="nav-item fs-18"><a href='#ability' class='h4'>Возможности</a></li>
                        <li class="nav-item fs-18"><a href='#office' class='h4'>Офис</a></li>
                        <li class="nav-item fs-18"><a href='#teams' class='h4'>Команды</a></li>
                    </ul>
                    <div class="button-box d-none d-xl-flex">
                        <button class='btn btn_default fs-18'>Вход&nbsp;<img v-bind:src="require(`@/assets/img/rocket.svg`)" class='button-img'></button>
                        <button class='btn btn_default btn_reverse fs-18'>Регистрация</button>
                    </div>
                    <div class="burger-box d-flex d-xl-none">
                        <button class="navbar-toggler btn fs-18" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                           <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" class='button-img'>
                        </button>
                    </div>
                </div>
            </div>
            <div class="collapse d-xl-none" id="navbarToggleExternalContent">
                <div class="row text-center">
                    <div class="col-12 nav-item">
                        <a href='#home' class='h4'>Главная</a>
                    </div>
                    <div class="col-12 nav-item mt-2">
                        <a href='#ability' class='h4'>Возможности</a>
                    </div>
                    <div class="col-12 nav-item mt-2">
                        <a href='#office' class='h4'>Офис</a>
                    </div>
                    <div class="col-12 nav-item mt-2">
                        <a href='#teams' class='h4'>Команды</a>
                    </div>
                    <div class="col-12 nav-item mt-2">
                        <button class='btn btn_default fs-18'>Вход&nbsp;<img v-bind:src="require(`@/assets/img/rocket.svg`)" class='button-img'></button>
                    </div>
                    <div class="col-12 nav-item mt-2">
                        <button class='btn btn_default btn_reverse fs-18'>Регистрация</button>
                    </div>
                </div>
            </div>
            <div class="container" id='home'>
                <div class="row mt-5">
                    <div class="col-12 col-md-6">
                        <div class="intro-box text-left mt-4">
                            <div class='ellipse'>
                                <div class="round">&#10004;</div>
                                <span class='fs-18'>#Чимси рекомендует!</span>
                            </div>
                            <span class='headline h1 mt-4'>Лучшее приложение для удаленной работы в команде.</span>
                            <span class='fs-16 mt-4'>Мы предлагаем программное решение для упрощения вашей связи с коллегами по работе.
                                Учитесь и работайте вместе с нашим помощником Чимси!
                            </span>
                            <div class="btn-box mt-4">
                                <button class='btn btn_default fs-18'>Начнем!&nbsp;<img v-bind:src="require(`@/assets/img/rocket.svg`)" class='button-img'></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="img-div">
                             <img v-bind:src="require(`@/assets/img/Tarelka21.png`)" class='img-fluid'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center mt-5" id='ability'>
            <div class="intro-box">
                <span class='headline h1'>Возможности UFOffice</span>
                <span class='fs-16 mt-2'>Создавайте команды, работайте, соревнуйтесь, обучайтесь, общайтесь вместе с нашим инопланетным гостем Чимси!</span>
            </div>
            <div class="row row-flex row-flex-wrap text-center ability-row">
                <div class="col-12 col-md-6 col-xl-4 mt-5 order-2 order-xl-1">
                    <div class="card">
                        <div class="content mt-4 mb-4">
                            <div class="round-icon-block bg-blue">
                                <img v-bind:src="require(`@/assets/img/rocket.svg`)" class='img-fluid'>
                            </div>
                            <span class='headline h5 mt-2 color-blue'>Зелупа</span>
                            <span class='fs-16 mt-2'>С нашей залупой все залупа</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4 mt-5 order-1 order-xl-2">
                    <div class="card active">
                        <div class="content mt-4 mb-4">
                            <div class="round-icon-block bg-green">
                                <img v-bind:src="require(`@/assets/img/rocket.svg`)" class='img-fluid'>
                            </div>
                            <span class='headline h5 mt-2 color-green'>Зелупа</span>
                            <span class='fs-16 mt-2'>С нашей залупой все залупа</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4 mt-5 order-3">
                    <div class="card">
                        <div class="content mt-4 mb-4">
                            <div class="round-icon-block bg-red">
                                <img v-bind:src="require(`@/assets/img/rocket.svg`)" class='img-fluid'>
                            </div>
                            <span class='headline h5 mt-2 color-red'>Зелупа</span>
                            <span class='fs-16 mt-2'>С нашей залупой все залупа</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid mt-5" id='office'>
            <div class="container mt-5">
                <div class="intro-box text-center">
                    <span class='headline h1'>Офис</span>
                    <span class='fs-16 mt-2'>Вся ваша команда у вас под рукой и на экране!</span>
                </div>
                <div class="container mb-5 mt-2">
                    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="5000">
                            <img v-bind:src="require(`@/assets/img/office.png`)" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item" data-bs-interval="5000">
                            <img v-bind:src="require(`@/assets/img/office.png`)" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item" data-bs-interval="5000"> 
                            <img v-bind:src="require(`@/assets/img/office.png`)" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">

        </div>
    </div>
</template>

<script>
export default {
    name:'lending',
    data(){
    }
}
</script>

<style scoped>
    .first-block{
        background-size: cover !important;
        background-repeat: no-repeat;
        background-position: bottom center;
        width: 100%;
    }
    .navigation{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        z-index: 1 !important;
    }
    .brand-div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
    }
    .brand-div img{
        height: calc(1.3rem + 1.0vw);
    }
    .nav-block{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: baseline;
    }
    ul{
        list-style-type: none;
        padding-left: 0;
        margin: auto 0 !important;
    }
    .nav-item{
        margin: 0 15px;
        z-index: 1;
    }
    .nav-item:hover{
        color: #6E44FF;
    }
    .intro-box{
        display: flex;
        flex-direction: column;
        align-content: space-around;
    }
    #ability .intro-box{
        max-width: 50%;
        margin: 0 auto;
    }
    .round{
        width: 40px;
        height: 40px;
        border: 2px solid #EE562F;
        border-radius: 50%;
        background: #EE562F;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #F8F7F9;
        margin-left: -14px;
        font-size: 24px;
    }
    .btn{
        z-index: 2 !important;
    }
    .brand-block, .btn-box{
        z-index: 2 !important;
    }
    .ellipse{
        display: flex;
        max-width: 260px;
        background-color: #33EBC9;
        border-radius: 30px;
        justify-content: space-around;
        align-items: center;
    }
    .button-img{
        height: 25px;
    }
    .navbar-toggler .button-img{
        height: 45px;
        border: 1px dotted #6E44FF;
        border-radius: 10px;
    }
    .img-div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 768px) {
        .img-div img{
            height: 40%;
        }
        .ability-row .active{
            margin-top: auto;
        }
        #ability .intro-box{
            max-width: 100%;
            margin: 0 auto;
        }
    }
    .row-flex, .row-flex > div[class*='col-']{
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex:1 1 auto; 
        justify-content: center;
        align-items: center;
    }
    .ability-row .card{
        width: 100%;
        max-width: 400px;
        border: none !important;
        background-color: transparent;
    }
    .ability-row .card:hover, .ability-row .active{
        -webkit-box-shadow: 0px 25px 75px 6px rgba(255, 225, 234, 0.64);
        -moz-box-shadow: 0px 25px 75px 6px rgba(255, 225, 234, 0.64);
        box-shadow: 0px 25px 75px 6px rgba(255, 225, 234, 0.64);
        transition: all 0.2s ease-in-out;
    }

    .ability-row .active{
        margin-top: -25px !important;
    }

    .round-icon-block{
        height: 80px;
        width: 80px;
        border: 1px transparent solid;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .round-icon-block img{
        height: 40px;
    }
    .ability-row .card .content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
    .container-fluid{
        width: 100%;
        border: 1px transparent solid;
        border-radius: 0 10% 10% 0;
        background-color: #FFE1EA;
    }
    
/*========== Animated Elements ==========*/
    .anim-elements {
        position: absolute;
        top: 0;
        left: 0;
        height: 500px;
        width: 100%;
        overflow: hidden;
        z-index: 0 !important;
    }
    .anim-element{
        height: 25px;
        width: 25px;
    }
    .anim-elements .anim-element{ position: absolute; }
    .anim-elements .anim-element:nth-child(1) {
        top: 12%;
        left: 15%;
        animation: animTwo 13s infinite linear;
    }
    .anim-elements .anim-element:nth-child(2) {
        top: 15%;
        left: 45%;
        -webkit-animation: animOne 15s infinite linear;
        animation: animOne 15s infinite linear;
    }
    .anim-elements .anim-element:nth-child(3) {
        bottom: 20%;
        left: 30%;
        -webkit-animation: animFour 15s infinite linear alternate;
        animation: animFour 15s infinite linear alternate;
    }
    .anim-elements .anim-element:nth-child(4) {
        bottom: 15%;
        right: 25%;
        -webkit-animation: animFive 15s infinite linear alternate;
        animation: animFive 15s infinite linear alternate;
        
    }
    .anim-elements .anim-element:nth-child(5) {
        top: 18%;
        right: 25%;
        -webkit-animation: animFour 15s infinite linear alternate;
        animation: animFour 15s infinite linear alternate;
    }
    .anim-elements .anim-element:nth-child(5):after, 
    .anim-elements .anim-element:nth-child(5):before {
        content: "";
        display: block;
        width: 100%;
        top: 6px;
        background: inherit;
        position: absolute;
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    .anim-elements .anim-element:nth-child(5):before {
        right: -6px;
    }
    .anim-elements .anim-element:nth-child(5):after {
        left: -6px;
    }
    @keyframes animOne {
        0% {
            transform: translate(0px, 0px) rotate(0deg)
        }
        20% {
            transform: translate(73px, -1px) rotate(35deg)
        }
        40% {
            transform: translate(141px, 72px) rotate(75deg)
        }
        60% {
            transform: translate(83px, 122px) rotate(110deg)
        }
        80% {
            transform: translate(-40px, 72px) rotate(145deg)
        }
        100% {
            transform: translate(0px, 0px) rotate(0deg)
        }
    }

    @-webkit-keyframes animOne {
        0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg)
        }
        20% {
            -webkit-transform: translate(73px, -1px) rotate(35deg)
        }
        40% {
            -webkit-transform: translate(141px, 72px) rotate(75deg)
        }
        60% {
            -webkit-transform: translate(83px, 122px) rotate(110deg)
        }
        80% {
            -webkit-transform: translate(-40px, 72px) rotate(145deg)
        }
        100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg)
        }
    }

    @keyframes animTwo {
        0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1)
        }
        20% {
            transform: translate(73px, -1px) rotate(36deg) scale(.9)
        }
        40% {
            transform: translate(141px, 72px) rotate(72deg) scale(1)
        }
        60% {
            transform: translate(83px, 122px) rotate(108deg) scale(1.2)
        }
        80% {
            transform: translate(-40px, 72px) rotate(144deg) scale(1.1)
        }
        100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1)
        }
    }

    @-webkit-keyframes animTwo {
        0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg) scale(1)
        }
        20% {
            -webkit-transform: translate(73px, -1px) rotate(36deg) scale(.9)
        }
        40% {
            -webkit-transform: translate(141px, 72px) rotate(72deg) scale(1)
        }
        60% {
            -webkit-transform: translate(83px, 122px) rotate(108deg) scale(1.2)
        }
        80% {
            -webkit-transform: translate(-40px, 72px) rotate(144deg) scale(1.1)
        }
        100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg) scale(1)
        }
    }

    @keyframes animThree {
        0% {
            transform: translate(165px, -179px)
        }
        100% {
            transform: translate(-346px, 617px)
        }
    }

    @-webkit-keyframes animThree {
        0% {
            -webkit-transform: translate(165px, -179px)
        }
        100% {
            -webkit-transform: translate(-346px, 617px)
        }
    }

    @keyframes animFour {
        0% {
            transform: translate(-300px, 151px) rotate(0deg)
        }
        100% {
            transform: translate(251px, -200px) rotate(180deg)
        }
    }

    @-webkit-keyframes animFour {
        0% {
            -webkit-transform: translate(-300px, 151px) rotate(0deg)
        }
        100% {
            -webkit-transform: translate(251px, -200px) rotate(180deg)
        }
    }

    @keyframes animFive {
        0% {
            transform: translate(61px, -99px) rotate(0deg)
        }
        21% {
            transform: translate(4px, -190px) rotate(38deg)
        }
        41% {
            transform: translate(-139px, -200px) rotate(74deg)
        }
        60% {
            transform: translate(-263px, -164px) rotate(108deg)
        }
        80% {
            transform: translate(-195px, -49px) rotate(144deg)
        }
        100% {
            transform: translate(-1px, 0px) rotate(180deg)
        }
    }

    @-webkit-keyframes animFive {
        0% {
            -webkit-transform: translate(61px, -99px) rotate(0deg)
        }
        21% {
            -webkit-transform: translate(4px, -190px) rotate(38deg)
        }
        41% {
            -webkit-transform: translate(-139px, -200px) rotate(74deg)
        }
        60% {
            -webkit-transform: translate(-263px, -164px) rotate(108deg)
        }
        80% {
            -webkit-transform: translate(-195px, -49px) rotate(144deg)
        }
        100% {
            -webkit-transform: translate(-1px, 0px) rotate(180deg)
        }
    }

</style>