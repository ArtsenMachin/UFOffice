<template>
    <div id="team">
        <div class="container mt-5" v-if="TeamWorker">
            <div class="desc-block text-center">
                <div class="name headline h3">{{TeamWorker[i].name}}</div>
                <div class="proffesion">{{TeamWorker[i].proffesion}}</div>
            </div>
            <div class="center-block mt-5 row text-center">
                <div class="col-12 col-sm-6 col-md-4 col-xl-3 order-2 order-md-1 mt-md-0 mt-2">
                    <div class="skills-block info-card card">
                        <div class="text-center mt-2 h5">Навыки</div>
                        <hr>
                        <div class="skills">
                            <div class="round-skill card mt-2"
                            v-for="skills in TeamWorker[i].skills" :key="skills.id">
                                <img v-bind:src="skills.img" class='img-fluid'>
                            </div>
                        </div>
                        <div class="rating mt-2 text-left">
                            <span class='fs-18'>Рейтинг:
                                <span class='color-red'>
                                    <i class="fa fa-star-half" aria-hidden="true"></i></span>
                                    {{TeamWorker[i].rating}}
                                </span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-xl-6 order-1 order-md-2">
                    <div class="image-block text-center">
                        <img v-bind:src="TeamWorker[i].img" class='img-fluid'>
                    </div>
                    <div class="work-block">
                        <div class="name headline h3 mt-2">{{TeamWorker[i].work}}</div>
                        <div class="proffesion">{{TeamWorker[i].ttd}}</div>
                        <div class="delete" v-if="role=='teamlead'">
                            <button class='btn btn_default bg-red' v-on:click="DeleteWorker(TeamWorker[i].id)">Уволить</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3 order-3 order-md-3 mt-md-0 mt-2">
                    <div class="contact-block info-card card">
                        <div class="text-center mt-2 h5">Контактные данные</div>
                        <hr>
                        <div class="telephone mt-2">
                            телефон: &nbsp; <span class='h5'><a v-bind:href="TeamWorker[i].phone">{{TeamWorker[i].phone}}</a></span>
                        </div>
                        <div class="mail mt-2">
                            почта: &nbsp;<span class='h5'><a v-bind:href="`mailto:`+TeamWorker[i].mail">{{TeamWorker[i].mail}}</a></span>
                        </div>
                        <div class="social mt-2">
                            <a v-bind:href="TeamWorker[i].tg">
                                <img v-bind:src="require(`@/assets/img/telegram.png`)" class='img-fluid'>
                            </a>
                            <a v-bind:href="TeamWorker[i].vk">    
                                <img v-bind:src="require(`@/assets/img/vk.png`)" class='img-fluid'>
                            </a>
                            <a v-bind:href="TeamWorker[i].fb">  
                                <img v-bind:src="require(`@/assets/img/facebook.png`)" class='img-fluid'>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-xl-3 text-center arrows">
                   <button class='btn' v-on:click="Prev"><span class='display-2 color-red'>&#8592;</span></button>
                </div>
                <div class="col-6 col-md-4 col-xl-3 offset-md-4 offset-xl-6 text-center arrows">
                    <button class='btn' v-on:click="Next"><span class='display-2 color-red'>&#8594;</span></button>
                </div>
            </div>
            <div class="cards-container">
                <div class="content" id='overflow'>
                    <button class='btn' v-on:click="Switch(worker.position)"
                        v-for="worker in TeamWorker" :key="worker.id">
                            <div class="card">
                                <div class="round-skill">
                                    <img v-bind:src="worker.img">
                                </div>
                                <div class="name-block">
                                    <div class="name headline h4">{{worker.name}}</div>
                                </div>
                            </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="container teamlead-container mt-5" v-else>
            <div class="row g-0">
                <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                    <div class="card team-card"
                        v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`"
                        v-on:click="newTeam()">
                        <span class='display-4'><i class="fa fa-plus-square-o" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
            <div class="card mt-5"
            v-if="newTeamWin" @submit.prevent="addNewTeam(newteamInfo)">
                <div class='headline h2 text-center mt-2'>Создание команды</div>
                <form class='row'>
                    <div class="col-12 col-md-8 offset-md-2">
                        <label for="validationDefault3" class="form-label mt-3">Введите название команды</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="validationDefault3"  required v-model="newteamInfo.name">
                        </div>
                    </div>
                    <div class="col-12 col-md-8 offset-md-2 mt-2">
                         <div class='headline text-center'>Выберите сотрудников</div>
                         <div class="row">
                             <div class="col-12 col-sm-6 col-xl-4"
                             v-for="new_worker in newWorker" :key="new_worker.id">
                                 <div class="card mt-2 new-worker-card"
                                 v-on:click="addWorker(new_worker.id)"
                                 v-bind:id="`worker`+new_worker.id">
                                     <div class="card-body text-center">
                                         <div class="fs-18">{{new_worker.name}}</div>
                                         <div class="fs-16">{{new_worker.proffesion}}</div>
                                         <hr>
                                         <div class="skills">
                                            <div class="round-skill card mt-2"
                                            v-for="skills in new_worker.skills" :key="skills.id">
                                                <img v-bind:src="skills.img" class='img-fluid'>
                                            </div>
                                        </div>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-12 text-center mt-2 mb-2">
                                 <button class='btn btn_default' type='submit'>Создать</button>
                             </div>
                         </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: mapGetters(["TeamWorker", "newWorker"]),
    data(){
        return{
            i:0,
            role:'teamlead',
            newTeamWin:false,
            newteamInfo:{
                name:'',
                workers:[]
            }
        }
    },
    async mounted(){
        this.MenuLink();   
        this.getTeam();
        //this.role=localStorage.role;
        if(this.TeamWorker){
            console.log(this.newWorker);
            this.getNewTeam();
        }
    },
    methods:{
        ...mapActions(['getTeam','DeleteTeamWorker','getNewTeam', "addNewTeam"]),
        MenuLink(){
            document.getElementById("link-card-3").classList.remove('active');
            document.getElementById("link-card-1").classList.remove('active');
            document.getElementById("link-card-2").classList.add('active');
            if(!this.TeamWorker){
                let width=this.TeamWorker.length*280;
                document.getElementById('overflow').style.width=width+"px";
            }
        },
        DeleteWorker(id){
            this.DeleteTeamWorker(id);
        },
        Prev(){
            if(this.i==0){
                this.i=this.TeamWorker.length-1;
            }else{
                this.i--
            }
        },
        Next(){
            if(this.i==this.TeamWorker.length-1){
                this.i=0;
            }else{
                this.i++
            }
        },
        Switch(id){
            this.i=id;
        },
        newTeam(){
            if (this.newTeamWin){
                this.newTeamWin=false
            }else{
                this.newTeamWin=true
            }
        },
        addWorker(elem){
            console.log(elem);
            var index=this.newteamInfo.workers.indexOf(elem);
            if(index<0){
                document.getElementById(`worker`+elem).style.backgroundColor="#6d44ffbd";
                this.newteamInfo.workers.push(elem);
            }else{
                document.getElementById(`worker`+elem).style.backgroundColor="#6d44ff6b";
                this.newteamInfo.workers.splice(index, 1);
               
            }
        }
    }
}
</script>
<style scoped>
    .desc-block{
        width: 100%;
    }
    .round-skill{
        width: 70px !important;
        height: 70px !important;
        border-radius: 50%;
        border: 2px solid #33EBC9;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .round-skill img{
        height: 50px !important;
    }
    .info-card{
        padding: 15px;
    }
    .skills, .social{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-flow: row wrap;
    }
    .social{
        justify-content: flex-end;
    }
    .social img{
        width: 40px;
        border-radius: 50%;
        margin: 5px
    }
    .arrows{
        margin-top: -275px;
    }
    .cards-container{
        overflow: auto;
    }
    .cards-container .card{
        width: 250px;
        border-radius: 10px;
        border: 1px solid #6E44FF;
        background-color: transparent;
        padding: 15px;
    }
    .cards-container .card:hover{
        background-color: #6d44ff6b;
    }
    @media screen and (max-width:767px) and (min-width: 576px){
        .info-card{
            height: 282px;
        }
    }
    @media screen and (max-width:1200px) {
        .arrows{
            margin-top: -100px;
        }
    }
    @media screen and (max-width:990px) {
        .arrows{
            margin-top: 15px;
        }
    }
    .team-card{
        width:300px;
        background-color: #12130F !important;
        padding: 15px;
        border-radius: 5px;
        color: #F8F7F9;
        height: 150px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .team-card:hover{
        cursor: pointer;
        background-color: #6E44FF !important;
    }
    .worker-card{
        width:100%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: space-around;
        padding: 15px;
    }
    .name-worker-card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .round-image{
        width: 50px;
        height: 50px;
        border: 2px dotted #6E44FF;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .round-image img{
        width: 30px;
        margin: 0 auto;
    }
    .task-block-text {
        width: 100%;
    }
    .teamlead-container{
        min-height: 60vh;
    }
    .new-worker-card{
        border-radius: 5px;
        border: 1px solid #6E44FF;
        background-color: #6d44ff6b;
    }
    .new-worker-card:hover{
        cursor: pointer;
        background-color: #6d44ffbd;
        transition:ease-in 0.3s;
    }
</style>