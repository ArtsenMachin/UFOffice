<template>
    <div id="taskmodal" aria-hidden="true">
        <div class='overlay-content'>
            <div class='container'>
                <div class='row'>
                    <div class='col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3'>
                        <div class='card'>
                            <div class="exit-block">
                                <button class='btn' @click="CloseModalWindow()"><span class='h5'><i class="fa fa-times" aria-hidden="true"></i></span></button>
                            </div>
                            <span class='fs-24 h4'>{{task.name}}</span>
                            <div class="time-block mt-1">
                                <span class='fs-18'>Срок:&nbsp;{{task.time}}&nbsp;</span>
                                <div v-bind:class="task.status" class='color-white'>{{alert}}</div>
                            </div>
                            <span class='h4 mt-1'>Описание:</span>
                            <span class='fs-18'>{{task.description}}</span>
                            <button class='btn btn_default mt-1' v-on:click="SaveCard(task.id)"
                            v-if="write_btn">Выполнено</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    props:['task'],
    data(){
        return{
            alert:'',
            write_btn:false
        }
    },
    mounted(){
        this.Alerts();
    },
    methods:{
        CloseModalWindow(){
           this.$emit('closeModal');
        },
        Alerts(){
            if(this.task.status==='active'){
                this.alert='В работе';
            }else{ 
                if(this.task.status==='inactive'){
                    this.alert='Успешно!';
                }else{
                    this.alert='ПРОСРОЧЕНО!';
                }
            }
            if(this.task.user_id===localStorage.user_id && this.task.status!='inactive'){
                this.write_btn=true;
            }
        },
        SaveCard(id){
            this.readyCard(id);
            this.CloseSuccess();
            this.CloseModalWindow();
        },
        CloseSuccess(){
            this.$emit('CloseSuccess');
        },
        ...mapActions(['readyCard']),
    }
}
</script>
<style scoped>
.active{
    background-color: #6E44FF;
}
.inactive{
    background-color: #20E9C4;
}
.stillactive{
    background-color: #EE562F;
}
.active, .inactive, .stillactive{
    padding: 2.5px;
    border-radius: 5px;
}
#taskmodal{
    min-width: 100% !important;
    min-height: 100% !important;
    z-index: 99;
    background: #f8f7f9c4;
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: hidden;
    transition: 0.5s;
    display: block;
}
.overlay-content{
    height: 100%;
    width: 100%;
    margin-top: 20%;
}
.card{
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 15px;
    justify-content: flex-start;
    border-radius: 5px;
}
.exit-block{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
}
.time-block{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
}
</style>