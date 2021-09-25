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
                        <div class="text display-5 logo">{{user_rating.rating}}</div>
                    </div>
                    <div class="col-6 text-center">
                        <div class="headline h2">Ваш ранг</div>
                        <div class="text display-5 logo">{{user_rating.position}}</div>
                    </div>
                </div>
            </div>
            <div class="img-div mt-5">
                <img v-bind:src="require(`@/assets/img/liderboard.svg`)">
            </div>
           <div class="card lider-card"
            v-for="worker in lider" :key="worker.id">
                <div class="row">
                    <div class="col-4 text-center">
                        <span class='fs-24'
                            v-bind:class="'pos'+worker.position">{{worker.position}}</span>
                    </div>
                    <div class="col-4 text-center">
                        <span class='fs-24'>{{worker.name}}</span>
                    </div>
                    <div class="col-4 text-center">
                        <span class='fs-24'>{{worker.rating}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid footer text-center mt-5">
            <a href='https://github.com/ArtsenMachin/UFOffice' target="blank"><span class='h4'>Team Cheemsburger</span></a>
        </div>
    </div>
</template>

<script>
import TopMenuOffice from "@/components/office/TopMenuOffice.vue"
import axios from "axios"
export default {
  components: {TopMenuOffice},
  data(){
      return{
          orgname:{
               type:'notmenu',
           },
           lider:'',
            user_rating:'',
        }
  },
  mounted(){
      this.getLiderboard();
     
  },
  methods: {
      getLiderboard(){
          var user=localStorage.id;
            const path = 'http://26.237.70.37:5000/leaderboard?user_id='+user;
            axios.get(path)
              .then((res) => {
                this.lider = res.data;
                var user=localStorage.id;
                    const path = 'http://26.237.70.37:5000/userrating?user_id='+user;
                    axios.get(path)
                    .then((res) => {
                        this.user_rating = res.data;                        
                    })
                    .catch((error) => {
                        console.error(error);
                    }); 
              })
              .catch((error) => {
                console.error(error);
              }); 
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