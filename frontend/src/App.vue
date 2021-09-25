<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  color: #12130F;
  background-color: #F8F7F9;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  max-width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
.headline{
  font-weight: 500;
}
.logo{
  font-family: 'Titan One', cursive;
  font-weight: 400;
}
a{
  text-decoration: none !important;
  color: unset !important;
}
.fs-24{
  font-size: 24px;
}
.fs-18{
   font-size: 18px;
}
.fs-16{
  font-size: 16px;
}
@media screen and (max-width: 991px){
  .fs-24{
    font-size: 18px;
  }
  .fs-18{
   font-size: 16px;
  }
  .fs-16{
    font-size: 14px;
  }
}
.color-green{
  color: #33EBC9;
}
.color-red{
  color: #EE562F;
}
.color-blue{
  color: #6E44FF;
}
.color-white{
  color: #F8F7F9;
}
button:active, button:focus {
  outline: none !important;
  box-shadow: unset !important;
}
button::-moz-focus-inner {
  border: 0;
}

.btn_default{
    border-radius: 20px !important;
    border: 2px solid #6E44FF !important;
    background-color: #6E44FF !important;
    color: #F8F7F9 !important;
    width: 130px;
    margin: 0 auto;
    vertical-align: auto !important;
}
.btn_default:hover{
    border: 2px solid #6E44FF !important;
    background-color: transparent !important;
    color: #12130F !important;
}
.btn_reverse{
    border: 2px solid #EE562F !important;
    background-color: transparent !important;
    color: #12130F !important;
    margin: 0 15px;
}
.btn_reverse:hover{
    border: 2px solid #EE562F !important;
    background-color: #EE562F !important;
    color: #F8F7F9 !important;
}
.bg-blue{
  background-color: #6E44FF;
}
.bg-green{
  background-color: #33EBC9;
}
.bg-red{
  background-color: #EE562F !important;
  border-color: #EE562F !important;
}
.button-img{
        height: 25px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
