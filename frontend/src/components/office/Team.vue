<template>
    <div id="team">
        <div class="container mt-5">
            <div class="desc-block text-center">
                <div class="name headline h3">{{worker[i].name}}</div>
                <div class="proffesion">{{worker[i].proffesion}}</div>
            </div>
            <div class="center-block mt-5 row text-center">
                <div class="col-12 col-sm-6 col-md-4 col-xl-3 order-2 order-md-1 mt-md-0 mt-2">
                    <div class="skills-block info-card card">
                        <div class="text-center mt-2 h5">Навыки</div>
                        <hr>
                        <div class="skills">
                            <div class="round-skill card mt-2"
                            v-for="skills in worker[i].skills" :key="skills.id">
                                <img v-bind:src="skills.img" class='img-fluid'>
                            </div>
                        </div>
                        <div class="rating mt-2 text-left">
                            <span class='fs-18'>Рейтинг:
                                <span class='color-red'>
                                    <i class="fa fa-star-half" aria-hidden="true"></i></span>
                                    {{worker[i].rating}}
                                </span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-xl-6 order-1 order-md-2">
                    <div class="image-block text-center">
                        <img v-bind:src="worker[i].img" class='img-fluid'>
                    </div>
                    <div class="work-block">
                        <div class="name headline h3 mt-2">{{worker[i].work}}</div>
                        <div class="proffesion">{{worker[i].ttd}}</div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xl-3 order-3 order-md-3 mt-md-0 mt-2">
                    <div class="contact-block info-card card">
                        <div class="text-center mt-2 h5">Контактные данные</div>
                        <hr>
                        <div class="telephone mt-2">
                            телефон: &nbsp; <span class='h5'><a v-bind:href="worker[i].phone">{{worker[i].phone}}</a></span>
                        </div>
                        <div class="mail mt-2">
                            почта: &nbsp;<span class='h5'><a v-bind:href="`mailto:`+worker[i].mail">{{worker[i].mail}}</a></span>
                        </div>
                        <div class="social mt-2">
                            <a v-bind:href="worker[i].tg">
                                <img v-bind:src="require(`@/assets/img/telegram.png`)" class='img-fluid'>
                            </a>
                            <a v-bind:href="worker[i].vk">    
                                <img v-bind:src="require(`@/assets/img/vk.png`)" class='img-fluid'>
                            </a>
                            <a v-bind:href="worker[i].fb">  
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
                        v-for="worker in worker" :key="worker.id">
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
    </div>
</template>
<script>
export default {
    data(){
        return{
            i:0,
            worker:[{
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/team_icon_2.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не вовк',
                ttd:'12:36:56',
                position:0,
                rating:'200',
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'залупа',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    }
                ]
            },
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/Worker_icon.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не вовк',
                ttd:'12:36:56',
                position:1,
                rating:'200',
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    }
                ]
            },
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/Worker_icon.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не вовк',
                ttd:'12:36:56',
                position:2,
                rating:'200',
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    }
                ]
            },
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/Worker_icon.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не вовк',
                ttd:'12:36:56',
                position:3,
                rating:'200',
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    }
                ]
            },
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/Worker_icon.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не сасать',
                ttd:'12:36:56',
                position:4,
                rating:'200',
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    }
                ]
            }
            ]
        }
    },
    mounted(){
        this.MenuLink();
    },
    methods:{
        MenuLink(){
            document.getElementById("link-card-3").classList.remove('active');
            document.getElementById("link-card-1").classList.remove('active');
            document.getElementById("link-card-2").classList.add('active');
            let width=this.worker.length*280;
            document.getElementById('overflow').style.width=width+"px";
        },
        Prev(){
            if(this.i==0){
                this.i=this.worker.length-1;
            }else{
                this.i--
            }
        },
        Next(){
            if(this.i==this.worker.length-1){
                this.i=0;
            }else{
                this.i++
            }
        },
        Switch(id){
            this.i=id;
        }
    }
}
</script>
<style scoped>
    .desc-block{
        width: 100%;
    }
    .round-skill{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid #33EBC9;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .round-skill img{
        height: 50px;
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
</style>