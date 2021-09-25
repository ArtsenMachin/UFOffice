<template>
    <div id="task">
        <div class="container mt-5">
            <div class="task-container"
            v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                <div id='overflow'>
                    <div class="task-col card"
                    v-for="worker in worker" :key="worker.id">
                        <div class="row">
                            <div class="col-12 text-center name-block">
                                <div class="name headline h3 color-white">{{worker.name}}</div>
                                <div class="proffesion color-white">{{worker.proffesion}}</div>
                            </div>
                            <div class="col-12"
                            v-for="task in worker.tasks" :key="task.id">  
                                <div class="card task-card mt-2"
                                v-on:click="openTask(worker.id, task.id)">
                                    <div class="star">
                                        <span class='color-red'><i class="fa fa-star-half" aria-hidden="true"></i>{{task.level}}</span>
                                        <span class='watch'><i class="fa fa-eye" aria-hidden="true"></i></span>
                                    </div>
                                    <div class="task-name mt-1">
                                        <span>{{task.name}}</span>
                                    </div>
                                    <div class="time-block mt-1"
                                    v-bind:class="task.status">
                                        <span class='color-white'>{{task.time}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <TaskModal
        v-if="taskmodal"
        v-bind:task="bigTask"
        @closeModal="closeModal"/>
    </div>
</template>
<script>
import TaskModal from "@/components/office/TaskModal.vue"
export default {
  components:{
      TaskModal
  },
  data(){
      return{
          taskmodal:false,
          worker:[
              {
                  name:'Микульский Никита',
                  proffesion:'дизайнер',
                  id:'0',
                  tasks:[
                      {
                          name:'нарисовать картинки',
                          time:'25.09.2021',
                          level:'100',
                          description:'нарисовать картинки на лендинг',
                          status:'inactive',
                          id:'0'
                      },
                      {
                          name:'сделать canvas',
                          time:'26.09.2021',
                          level:'200',
                          description:'нарисовать офис на канвасе',
                          status:'active',
                          id:'1'
                      }
                  ]
              },
              {
                  name:'Цветков Роман',
                  proffesion:'разработчик',
                  id:'1',
                  tasks:[
                      {
                          name:'нарисовать картинки',
                          time:'25.09.2021',
                          level:'100',
                          description:'нарисовать картинки на меню и команду',
                          status:'active',
                          id:'0'
                      },
                      {
                          name:'шаблонизировать запросы в json',
                          time:'26.09.2021',
                          level:'200',
                          description:'шаблонизировать запросы в json на flask',
                          status:'active',
                          id:'1'
                      }
                  ]
              },
              {
                  name:'Четвергтаков Иван',
                  proffesion:'разработчик',
                  id:'2',
                  tasks:[
                      {
                          name:'создать БД',
                          time:'25.09.2021',
                          level:'300',
                          description:'создать базу данных на PostgreSQL',
                          status:'inactive',
                          id:'0'
                      },
                      {
                          name:'написать запросы',
                          time:'26.09.2021',
                          level:'500',
                          description:'Написать запросы на все функции',
                          status:'active',
                          id:'1'
                      },
                      {
                          name:'поднять сервер',
                          time:'26.09.2021',
                          level:'500',
                          description:'Поднять сервер и настроить CORS',
                          status:'active',
                          id:'2'
                      },
                      {
                          name:'Выспаться',
                          time:'26.09.2021',
                          level:'500',
                          description:'Хорошенько поспать',
                          status:'active',
                          id:'3'
                      }
                  ]
              },
              {
                  name:'Столбов Михаил',
                  proffesion:'мигрант',
                  id:'3',
                  tasks:[
                      {
                          name:'получить паспорт',
                          time:'10.09.2017',
                          level:'10',
                          description:'получить Российское гражданство',
                          status:'stillactive',
                          id:'0'
                      },
                      {
                          name:'нарисовать картинок',
                          time:'26.09.2021',
                          level:'500',
                          description:'Картинки!',
                          status:'active',
                          id:'1'
                      }
                  ]
              }
          ],
          bigTask:{
                name:'',
                time:'',
                level:'',
                description:'',
                status:'',
                task_id:'',
                worker_id:'',
          }
      }
  },
  mounted(){
      this.MenuLink();
  },
  methods:{
      MenuLink(){
            document.getElementById("link-card-1").classList.remove('active');
            document.getElementById("link-card-2").classList.remove('active');
            document.getElementById("link-card-3").classList.add('active');
            let width=this.worker.length*340;
            document.getElementById('overflow').style.width=width+"px";
      },
      openTask(worker_id, task_id){
          let worker = this.worker.find((item) => item.id === worker_id);
          let task= worker.tasks.find((item) => item.id === task_id);
          this.bigTask=task;
          this.taskmodal=true;
      },
      closeModal(){
          this.taskmodal=false;
      }
  }
}
</script>
<style scoped>
    .task-container{
        overflow: auto;
        min-height: 60.5vh;
        background-color: #12130F !important;
        padding-top: 15px;
        border-radius: 10px;
    }
    .task-col{
        width: 300px;
        background-color: transparent !important;
    }
    #overflow{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .card{
        padding: 15px;
    }
    .task-card{
        background-color: #F8F7F9;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: space-around;
    }
    .star{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .watch{
        opacity: 0;
    }
    .task-card:hover{
        cursor: pointer;
        background-color: #ececec;
        transition: 0.2s;
    }
    .task-card:hover .watch{
        opacity: 1;
        transition: 0.2s;
    }
    .name-block{
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: space-around;
    }
    .time-block{
        width: 50%;
        border-radius: 5px;
        padding: 2.5px;
    }
    .active{
        background-color: #6E44FF;
    }
    .inactive{
        background-color: #20E9C4;
    }
    .stillactive{
        background-color: #EE562F;
    }
</style>