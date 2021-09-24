<template>
    <div id="office">
        <TopMenuOffice
        v-bind:orgname="orgname"/>
        <div class="container mt-5 center_menu">
            <div class="row">
                <div class="col-12 col-md-10 offset-md-1 col-xl-8offset-xl-2">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-12 col-md-4">
                                <div class="link-card active"
                                v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                                    <div class="link-header">
                                        <span class='headline h1'>Офис</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="link-card text-center"
                                 v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                                    <div class="link-header text-center">
                                        <span class='headline h1'>Команда</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                               <div class="link-card"
                                v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                                    <div class="link-header">
                                        <span class='headline h1'>Задачи</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <GameOffice/>
        <Footer/>
    </div>
</template>

<script>
import TopMenuOffice from "@/components/office/TopMenuOffice.vue"
import GameOffice from "@/components/office/GameOffice.vue"
import Footer from '../components/additional_modules/Footer.vue'
export default {
  components: { Footer, TopMenuOffice, GameOffice},
  data(){
      return{
          orgname:'Название организации'
      }
  }
}
</script>

<style scoped>
    .center_menu .card{
        border-radius: 10px;
        border: 1px solid #6E44FF;
    }
    .card .row .col-12 {
        border-right: 1px solid #6E44FF;
    }
    .card .row .col-12:last-child{
        border-right: none;
    }
    .link-card{
        width: 100%;
        height: 125px;
        position: relative;
        background-color: #6d44ff6b !important;
        cursor: pointer;
    }
    .link-card:hover, .active{
        background-color: #6d44ffbd !important;
        transition:ease-in 0.3s;
    }
    .card .row .col-12:first-child .link-card .link-header{
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
    .card .row .col-12:first-child .link-card{
        border-radius: 10px 0px 0px 10px;
    }
    .card .row .col-12:last-child .link-card{
        border-radius: 0px 10px 10px 0px;
    }
    .card .row .col-12:nth-child(2) .link-card .link-header{
        position: absolute;
        bottom: 10px;
        width: 100%;
    }
    .card .row .col-12:last-child .link-card .link-header{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .card .row .col-12{
        padding: 0;
    }
    @media screen and (max-width: 767px) {
        .card .row .col-12 {
            border-right: none;   
        }
        .link-card{
            border-bottom: 1px solid #6E44FF;
        }
        .card .row .col-12:last-child .link-card{
            border-bottom: none;
        }
        .link-header{
            position: absolute;
            bottom: 10px;
            left: unset !important;
            right: unset !important;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .card .row .col-12:first-child .link-card{
            border-radius: 10px 10px 0px 0px;
        }
        .card .row .col-12:last-child .link-card{
            border-radius: 0px 0px 10px 10px;
        }
    }
</style>