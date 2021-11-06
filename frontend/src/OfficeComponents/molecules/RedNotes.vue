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
    @submit.prevent="redact"
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
        class='mt-8 mx-5 white--text'
        @click="redact"
        >
        Изменить
    </v-btn>
    <v-btn
    color="red"
    class='mt-8 mx-5 white--text'
    @click="cancel">
        Отмена
    </v-btn>
    </v-form>
    </v-sheet>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RedNotes',
  props: {
    notes: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    notesInfo: {
      header: '',
      body: '',
      id: '',
    },
  }),
  mounted() {
    this.notesInfo = this.notes;
  },
  methods: {
    ...mapActions('notes', ['updateNotes']),
    ...mapActions('dialog', ['openDialog']),
    redact() {
      this.updateNotes(this.notesInfo);
    },
    cancel() {
      const dialog = {
        action: '',
        elProps: '',
        value: false,
      };
      this.openDialog(dialog);
    },
  },

};
</script>
