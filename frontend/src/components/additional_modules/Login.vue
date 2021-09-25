<template>
    <div id='login'>
        <div class="first-block"
        v-bind:style="`background: url(${require('@/assets/img/back.png')}) no-repeat`">
            <div class="container">
                <div class="navigation">
                    <div class="brand-block">
                        <router-link class="logo" to='/'>
                            <div class="brand-div">
                                    <span class='h2'>&nbsp;UF<span class='color-green'>O</span>ffice</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="button-box">
                         <router-link to='/sign_in'><button class='btn btn_default btn_reverse fs-18'>Регистрация</button></router-link>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <router-link to='/'><span class='headline fs-18'>Главная</span></router-link>
                        <span class='fs-18'>&nbsp;//&nbsp;</span>
                        <span class='fs-18 headline color-blue'>Вход</span>
                        <div class="headline h1 mt-2">Форма <span class='color-blue'>Входа</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container form-container mb-5 mt-5">
            <div class="row form-block">
                <div class="col-12 col-md-6">
                    <div class="role-block">
                        <img v-bind:src="require(`@/assets/img/Worker_icon.png`)" class='img-fluid'/>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <form class='row' @submit.prevent="onSignin">
                        <div class='col-12'>
                            <label for="validationDefault1" class="form-label mt-3">Введите логин</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="validationDefault1"  required v-model="userInfo.login">
                            </div>
                        </div>
                        <div class='col-12'>
                            <label for="validationDefault2" class="form-label mt-3">Введите пароль</label>
                            <div class="input-group">
                                <input type="password" class="form-control" id="validationDefault2"  required v-model="userInfo.password">
                            </div>
                        </div>
                        <div class='col-12 text-center mt-3'>
                            <button class="btn_default btn text-center" type="submit">Вход</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container-fluid text-center">
            <a href='https://github.com/ArtsenMachin/UFOffice' target="blank"><span class='h4'>Team Cheemsburger</span></a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components:{
    },
    data(){
        return{
            userInfo:{
                login:'',
                password:'',
            }
        }
    },
    methods:{
        onSignin(){
          const path = 'http://26.237.70.37:5000/login';
            axios.post(path, this.userInfo)
            .then((res) => {
                if (res.data=='wrong'){
                    this.mistake='anotherLogin';
                }else{
                    this.mistake='';
                    localStorage.setItem('login', res.data.login);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('role', res.data.role);
                    localStorage.setItem('id', res.data.token);
                    this.$router.push('/office_menu');
                }
            })
            
        }
    }
}
</script>

<style scoped>
    .container-fluid{
        background-color: #402C87 !important;
        border-radius: 0 !important;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .container-fluid span{
        color: #F8F7F9;
    }
    .first-block{
        background-size: cover !important;
        background-repeat: no-repeat;
        background-position: bottom center;
        width: 100%;
        height: 25vh; 
    }
    .navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        z-index: 1 !important;
    }
    .brand-div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
    }
    .form-container{
        border: 1px solid #6E44FF;
        border-radius: 10px;
        padding: 15px;
        background-color: #F8F7F9;
    }
    .form-block{
        display: flex;
        flex-direction: row;
        justify-content: center !important;
        align-items: center !important;
    }
    .form-control{
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #6E44FF;
        background-color: #F8F7F9;
    }
    .role-block img{
        height: 80%;
        max-height: 450px;
    }
</style>