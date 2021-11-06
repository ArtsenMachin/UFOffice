<template>
  <v-app>
    <v-main app>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
    <window-dialog/>
  </v-app>
</template>

<script>
import WindowDialog from './templates/WindowDialog.vue';

export default {
  name: 'App',
  components: {
    WindowDialog,
  },
};
</script>

<style>
a{
  text-decoration: none !important;
  color: unset !important;
}
.logo{
  font-family: 'Titan One', cursive;
  font-weight: 400;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
