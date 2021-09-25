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
                            <form class='row' @submit.prevent="CreateNewTask">
                                <div class='col-12'>
                                    <label for="validationDefault3" class="form-label">Введите Название</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="validationDefault3"  required v-model="task_info.name">
                                    </div>
                                </div>
                                <div class='col-12 mt-2'>
                                    <label for="validationDefault6" class="form-label">Введите рейтинг</label>
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="validationDefault6"  required v-model="task_info.rating">
                                    </div>
                                </div>
                                <div class='col-12 mt-2'>
                                    <label for="validationDefault1" class="form-label">Введите дату</label>
                                    <div class="input-group">
                                        <input type="date" class="form-control" id="validationDefault1"  required v-model="task_info.data">
                                    </div>
                                </div>
                                <div class='col-12 mt-2'>
                                    <label for="validationDefault2" class="form-label">Введите описание</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="validationDefault2"  required v-model="task_info.desc">
                                    </div>
                                </div>
                                <div class="col-12 text-center mt-2">
                                    <button class='btn btn_default' type='submit'>Создать</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['task'],
    data(){
        return{
            task_info:{
                name:'',
                rating:'',
                data:'',
                desc:'',
                id:''
            }
        }
    },
    methods:{
        CloseModalWindow(){
           this.$emit('closeModal');
        },
        CreateNewTask(){
            this.task_info.id=this.task;
            this.$emit('updateParent', {
            new_task_data: this.task_info,
            });
            this.CloseModalWindow();
        }
    }
}
</script>
<style scoped>
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
.form-control{
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #12130F;
}
</style>