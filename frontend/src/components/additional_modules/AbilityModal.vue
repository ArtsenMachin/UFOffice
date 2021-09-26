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
                            <div class='fs-24 h4 text-center'>Vue JS</div>
                            <div class="mt-2 fs-18">
                                1. Изучение основ
                            </div>
                            <div class="mt-1 fs-16">
                                Прочитайте и изучите статью о начале работы во VueJs
                                <a href='https://ru.vuejs.org/v2/guide/#Начало-работы'>https://ru.vuejs.org/v2/guide/#Начало-работы</a>
                            </div>
                            <div class="mt-2 fs-18">
                                2. Пройдите введение о работе с VueJs до конца
                            </div>
                            <div class="mt-1 fs-16">
                                Прочитайте и изучите статью о начале работы во VueJs
                                <a href='https://ru.vuejs.org/v2/guide/index.html#Декларативная-отрисовка'>https://ru.vuejs.org/v2/guide/index.html#Декларативная-отрисовка</a>
                            </div>
                            <div class="mt-2 fs-18">
                                3. Практика
                            </div>
                            <div class="mt-1 fs-16">
                                Посмотрите видео и закрепите полученные знания с помощью тестового задания<br>
                                <a href='https://www.youtube.com/watch?v=OlnwgS-gk8Y&t=281s'>видео</a>,
                                <a href='https://docs.google.com/document/d/1oQcukpTSnlL1rOgO26Hkl0ljx_f7247xdApRPEcL_Nw/edit?usp=sharing'>тестовое задание</a>
                            </div>
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
            alert:'',
            write_btn:false
        }
    },
    methods:{
        CloseModalWindow(){
           this.$emit('closeModal');
        },
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
    margin-top: 10%;
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
a{
    color: #6E44FF !important;
}
</style>