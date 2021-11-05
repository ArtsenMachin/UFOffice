<template>
  <v-card class='pa-10'>
    <form
      width="100%"
      class="d-flex flex-column text-center"
      @submit.prevent="login"
    >
      <p class="text-h5">
        Взлетаем?
      </p>
      <v-text-field
        v-model="userInfo.username"
        label="Логин"
        hide-details="auto"
      >
        <v-icon
          slot="prepend"
          color="indigo"
        >
          mdi-account
        </v-icon>
      </v-text-field>
      <v-text-field
        v-model="userInfo.password"
        label="Пароль"
        hide-details="auto"
        class="mt-4"
        type="password"
      >
        <v-icon
          slot="prepend"
          color="indigo"
        >
          mdi-lock
        </v-icon>
      </v-text-field>
      <v-btn
      color="indigo"
      dark
      class='mt-8'
      @click="login"
      >
      Вход
      </v-btn>
    </form>
  </v-card>
</template>

<script>
import { toLogin } from '../../Api/user';

export default {
  name: 'LogIn',
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        await toLogin(this.userInfo);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
