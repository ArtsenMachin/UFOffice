<template>
    <div
    class='text-center'>

            <v-btn
            color="teal"
            class="mx-2"
            @click="userAct('login')">
                Вход
            </v-btn>

            <v-btn color="red"
            class="mx-2"
            @click="userAct('signin')">
                Регистрация
            </v-btn>

    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthBtn',
  methods: {
    ...mapActions('dialog', ['openDialog']),
    userAct(el) {
      if (localStorage.getItem('token')) {
        this.$router.push({ path: '/office' });
      } else {
        const dialog = {
          action: el,
          elProps: '',
          value: true,
        };
        this.openDialog(dialog);
      }
    },
  },
};
</script>
