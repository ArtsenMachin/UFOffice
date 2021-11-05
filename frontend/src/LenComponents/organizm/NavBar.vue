<template>
    <v-app-bar
    app
    flat
    color="indigo"
    dark>
    <v-spacer></v-spacer>
    <logo-block/>
    <v-spacer></v-spacer>
    <nav-btn
    v-for="(action, key) in navCfg"
    :key="key"
    :action="action"/>
    <v-spacer></v-spacer>
    <auth-btn/>
    <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
import LogoBlock from '../atoms/LogoBlock.vue';
import NavBtn from '../atoms/NavBtn.vue';
import AuthBtn from '../molecules/AuthBtn.vue';

export default {
  components: { LogoBlock, NavBtn, AuthBtn },
  name: 'NavBar',
  data: () => ({
    navCfg: [
      { link: '#home', msg: 'Главная' },
      { link: '#ability', msg: 'Возможности' },
      { link: '#office', msg: 'Офис' },
    ],
  }),
};
</script>
