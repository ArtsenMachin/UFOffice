<template>
    <div id='singin'>
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
                        <router-link to='/login'><button class='btn btn_default fs-18'>Вход&nbsp;<img v-bind:src="require(`@/assets/img/rocket.svg`)" class='button-img'></button></router-link>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <router-link to='/'><span class='headline fs-18'>Главная</span></router-link>
                        <span class='fs-18'>&nbsp;//&nbsp;</span>
                        <span class='fs-18 headline color-red'>Регистрация</span>
                        <div class="headline h1 mt-2">Форма <span class='color-red'>Регистрации</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container form-container mt-5">
            <div class="row form-block">
                <div class="col-12 col-md-6">
                    <div class="role-block text-center">
                        <div class="headline h3 mt-2 mb-2">Выберите вашу роль</div>
                        <div class="img-block">
                              <img v-bind:src="image"/>
                        </div>
                        <div class="button-role-block">
                            <button class='btn' v-on:click="BackRole()"><span class='headline h5'>&#8592;</span></button>
                            <span class='headline h2'>{{userInfo.role}}</span>
                            <button class='btn' v-on:click="NextRole()"><span class='headline h5'>&#8594;</span></button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <form class='row' @submit.prevent="onSignin()">
                        <div class='col-12'>
                            <label for="validationDefault3" class="form-label mt-3">Введите ФИО</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="validationDefault3"  required v-model="userInfo.fio">
                            </div>
                        </div>
                        <div class='col-12' v-if="userInfo.role=='Организация'">
                            <label for="validationDefault6" class="form-label mt-3">Введите название организации</label>
                            <div class="input-group">
                                <input type="mail" class="form-control" id="validationDefault6"  required v-model="userInfo.organization">
                            </div>
                        </div>
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
                        <div class='col-12'>
                            <label for="validationDefault5" class="form-label mt-3">Повторите пароль</label>
                            <div class="input-group">
                                <input type="password" class="form-control" id="validationDefault5"  required v-model="userInfo.repassword">
                            </div>
                        </div>
                        <div class='col-12'>
                            <label for="validationDefault4" class="form-label mt-3">Введите почту</label>
                            <div class="input-group">
                                <input type="mail" class="form-control" id="validationDefault4"  required v-model="userInfo.mail">
                            </div>
                        </div>
                        <div class='col-12' v-if="userInfo.role!='Организация'">
                            <label for="validationDefault6" class="form-label mt-3">Введите код вступления</label>
                            <div class="input-group">
                                <input type="mail" class="form-control" id="validationDefault6"  required v-model="userInfo.code">
                            </div>
                        </div>
                        <div class='col-12 text-center mt-3'>
                            <button class="btn_default btn text-center" type="submit">Регистрация</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/additional_modules/Footer.vue"
export default {
    components:{
        Footer
    },
    data(){
        return{
            userInfo:{
                login:'',
                password:'',
                repassword:'',
                mail:'',
                fio:'',
                role:"Работник",
                organization:''
            },
            image:require('@/assets/img/Worker_icon.png')
        }
    },
    methods:{
        onSignin(){
        /*  const path = 'http://26.173.145.160:5000/sign_in';
            axios.post(path, this.userInfo)
            .then((res) => {
                if (res.data=='wrong'){
                    this.mistake='anotherLogin';
                }else{
                    this.mistake='';
                    localStorage.setItem('login', res.data.login);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('role', res.data.role);
                    this.$router.push({ name: 'user', params: { userId: res.data.login }})
                }
            })*/
            this.$router.push('/office_menu');
        },
        BackRole(){
            if(this.userInfo.role=='Работник'){
                this.userInfo.role='Организация';
                this.image=require('@/assets/img/Office_icon_re.png');
            }else{
                if(this.userInfo.role=='Организация'){
                    this.userInfo.role='Тимлид';
                    this.image=require('@/assets/img/Teamlead_icon.png');
                }else{
                    this.userInfo.role='Работник';
                   this.image=require('@/assets/img/Worker_icon.png');
                }
            }
        },
        NextRole(){
            if(this.userInfo.role=='Работник'){
                this.userInfo.role='Тимлид';
                this.image=require('@/assets/img/Teamlead_icon.png');
            }else{
                if(this.userInfo.role=='Тимлид'){
                    this.userInfo.role='Организация';
                    this.image=require('@/assets/img/Office_icon_re.png');
                }else{
                    this.userInfo.role='Работник';
                    this.image=require('@/assets/img/Worker_icon.png');
                }
            }
        }
    }
}
</script>
<style scoped>
    .first-block{
        background-size: cover !important;
        background-repeat: no-repeat;
        background-position: bottom center;
        width: 100%;
        min-height: 25vh; 
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
        height: 100%;
    }
    .form-control{
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #6E44FF;
        background-color: #F8F7F9;
    }
    .role-block{
        display: flex;
        flex-direction: column;
        justify-content: center !important;
        align-content: space-around !important;
    }
    .img-block img{
        height: 80%;
        max-height: 450px;
    }
    .button-role-block{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
</style>