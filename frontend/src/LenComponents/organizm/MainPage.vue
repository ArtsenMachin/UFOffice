<template>
<v-container fluid
:style="`background: url(${require('@/assets/img/back.png')}) no-repeat`"
id="home">
    <div class="first-block">
        <div class="anim-elements">
            <div class="anim-element"
            :style="`background:url(${require('@/assets/img/Back_1.png')}) no-repeat`">
            </div>
            <div class="anim-element"
            :style="`background:url(${require('@/assets/img/Back_2.png')}) no-repeat`">
            </div>
            <div class="anim-element"
            :style="`background:url(${require('@/assets/img/Back_5.png')}) no-repeat`">
            </div>
            <div class="anim-element"
            :style="`background:url(${require('@/assets/img/Back_4.png')}) no-repeat`">
            </div>
            <div class="anim-element"
            :style="`background:url(${require('@/assets/img/Back_3.png')}) no-repeat`">
            </div>
        </div>
    </div>
    <v-container>
    <v-row class='mx-auto mt-15'>
        <v-col
        cols='12'
        lg='6'>
            <v-card
            class="mx-auto"
            elevation="0"
            color="transparent"
            >
                <v-card-text>
                    <div class="text-subtitle-1 mb-4 teal--text">
                    #Чимси рекомендует!
                    </div>
                    <p class="text-h4 mb-1 text--primary">
                    Лучшее приложение для удаленной работы в команде.
                    </p>
                    <div class='text-h5'>
                        Мы предлагаем программное
                        решение для упрощения вашей связи с коллегами по работе.
                        Учитесь и работайте вместе с нашим помощником Чимси!
                    </div>
                </v-card-text>
            <v-card-actions>
                <router-link to='/office'>
                    <v-btn
                    color="teal"
                    class="mx-2"
                    dark>
                        Начнем!
                    </v-btn>
                </router-link>
            </v-card-actions>
        </v-card>
        </v-col>
        <v-col
        cols='12'
        lg='6'>
            <v-img
            class='mx-auto'
            :src="require(`@/assets/img/tarelka.png`)"
            width='450px'
            max-width="100%"
            ></v-img>
        </v-col>
    </v-row>
    </v-container>
</v-container>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style scoped>
.container {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: bottom center !important;
    width: 100%;
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
