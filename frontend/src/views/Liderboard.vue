<template>
    <div id="liderboard">
        <TopMenuOffice
        v-bind:orgname="orgname"/>
        <div class="container mt-5">
            <span class='h1'>Таблица лидеров</span>
            <div class="individual-rate card mt-5">
                <div class="row">
                    <div class="col-6 text-center">
                        <div class="headline h2">Ваш рейтинг</div>
                        <div class="text display-5 logo">200</div>
                    </div>
                    <div class="col-6 text-center">
                        <div class="headline h2">Ваш ранг</div>
                        <div class="text display-5 logo">3</div>
                    </div>
                </div>
            </div>
            <div class="img-div mt-5">
                <img v-bind:src="require(`@/assets/img/liderboard.svg`)">
            </div>
           <div class="card lider-card"
            v-for="worker in worker" :key="worker.id">
                <span class='fs-24'
                v-bind:class="'pos'+worker.position">{{worker.position}}</span>
                <span class='fs-24'>{{worker.name}}</span>
                <span class='fs-24'>{{worker.rating}}</span>
            </div>
        </div>
        <div class="container-fluid footer text-center mt-5">
            <a href='https://github.com/ArtsenMachin/UFOffice' target="blank"><span class='h4'>Team Cheemsburger</span></a>
        </div>
    </div>
</template>

<script>
import TopMenuOffice from "@/components/office/TopMenuOffice.vue"
export default {
  components: {TopMenuOffice},
  data(){
      return{
          orgname:{
               name:'Название организации',
               type:'notmenu'
            },   
          worker:[
              {
                  name:'хуейм',
                  rating:'500',
                  position:'1'
              },
              {
                  name:'хуейм',
                  rating:'500',
                  position:'2'
              },
              {
                  name:'хуейм',
                  rating:'500',
                  position:'3'
              },
              {
                  name:'хуейм',
                  rating:'500',
                  position:'4'
              },
              {
                  name:'хуейм',
                  rating:'500',
                  position:'5'
              },
              {
                  name:'хуейм',
                  rating:'500',
                  position:'6'
              },
              {
                  name:'хуейм',
                  rating:'500',
                  position:'7'
              },
              {
                  name:'хуейм',
                  rating:'500',
                  position:'8'
              },
          ]
      }
  }
}
</script>
<style scoped>
    @media screen and (max-width:320px) {
        .headline{
            height: 56px !important;
        }
    }
    .individual-rate{
        border: 1px solid #6E44FF;
        background-color: #6d44ff6b;
        border-radius: 10px;
    }
    .text{
        color: #EE562F;
    }
    .lider-card{
        border-radius: 5px;
        background-color: #F8F7F9;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 2.5px;
    }
    .img-div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .img-div img{
        height: 70px;
        margin-right: 15%;
    }
    .pos1{
        color:#20E9C4 !important;
        font-size: 30px;
    }
    .pos2{
        color:#6E44FF !important;
        font-size: 28px;
    }
    .pos3{
        color:#EE562F !important;
        font-size: 26px;
    }
    .footer{
        background-color: #402C87 !important;
        border-radius: 0 !important;
        color: #F8F7F9;
        position: absolute;
        bottom: 0;
    }
</style>