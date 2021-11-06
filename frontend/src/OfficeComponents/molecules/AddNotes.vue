<template>
    <v-sheet
    color="yellow lighten-1"
    elevation="1"
    height="350"
    rounded
    width="100%"
    class='pa-2 mx-auto'
    >
    <v-form
    @submit.prevent="add"
    width="90%"
    class="text-center mx-auto">
    <p class="text-h5">
        Добавить заметку
    </p>
    <v-text-field
        v-model="notesInfo.header"
        label="Название"
        hide-details="auto"
    >
    </v-text-field>
    <v-textarea
        v-model="notesInfo.body"
        label="Описание"
        hide-details="auto"
    >
    </v-textarea>
    <v-btn
        color="indigo"
        dark
        class='mt-8'
        @click="add"
        >
        Создать
    </v-btn>
    </v-form>
    </v-sheet>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddNotes',
  data: () => ({
    notesInfo: {
      header: '',
      body: '',
      user_id: '',
    },
  }),
  methods: {
    ...mapActions('notes', ['newNotes']),
    add() {
      this.notesInfo.user_id = localStorage.id;
      this.newNotes(this.notesInfo);
    },
  },
};
</script>
