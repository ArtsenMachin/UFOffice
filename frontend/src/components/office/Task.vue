<template>
    <div id="task">
        <div class="container mt-5">
            <div class="task-container"
            v-bind:style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
                <div id='overflow'>
                    <div class="task-col card"
                    v-for="worker in TaskWorker" :key="worker.id">
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
                            <div class="col-12"
                            v-if="role=='teamlead'">
                                <div class="card task-card mt-2"
                                v-on:click="openNewTaskWin(worker.id)">
                                    <div class="headline h1 plus"><i class="fa fa-plus-square-o" aria-hidden="true"></i></div>
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
        @closeModal="closeModal"
        @CloseSuccess="CloseSuccess"/>
        <CreateTask
        v-if="createTaskModal"
        v-bind:task="NewTaskID"
        @closeModal="closeNewModal"
        @CloseSuccess="CloseSuccess"/>
    </div>
</template>
<script>
import TaskModal from "@/components/office/TaskModal.vue"
import CreateTask from "@/components/office/CreateTask.vue"
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["TaskWorker"]),
  components:{
      TaskModal, CreateTask
  },
  data(){
      return{
          taskmodal:false,
          createTaskModal:false,
          NewTaskID:'',
          bigTask:{
                name:'',
                time:'',
                level:'',
                description:'',
                status:'',
                task_id:'',
                worker_id:'',
                user_id:''
          },
          role: 'teamlead'
      }
  },
  async mounted(){
      this.MenuLink();
      this.getTask();
  },
  methods:{
      ...mapActions(["getTask"]),
      MenuLink(){
        document.getElementById("link-card-1").classList.remove('active');
        document.getElementById("link-card-2").classList.remove('active');
        document.getElementById("link-card-3").classList.add('active');
        let width=this.TaskWorker.length*340;
        document.getElementById('overflow').style.width=width+"px";
      },
      openTask(worker_id, task_id){
          let worker = this.TaskWorker.find((item) => item.id === worker_id);
          let task= worker.tasks.find((item) => item.id === task_id);
          this.bigTask=task;
          this.taskmodal=true;
      },
      openNewTaskWin(el){
          this.NewTaskID=el;
           this.createTaskModal=true;
      },
      closeModal(){
          this.taskmodal=false;
      },
      closeNewModal(){
          this.createTaskModal=false;
      },
      CloseSuccess(){
          this.getTask();
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
    .plus{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 0 !important;
    }
</style>