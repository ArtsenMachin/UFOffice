<template>
    <v-card
    flat
    class='pa-5'>
        <v-card-title class="text-center">
        <p class="text--primary">
            Удалить заметку {{notes.header}}?
        </p>
        </v-card-title>
        <v-card-actions>
            <v-btn
            color="indigo"
            class='mt-8 mx-5 white--text'
            @click="remove">
                Удалить
            </v-btn>
            <v-btn
            color="red"
            class='mt-8 mx-5 white--text'
            @click="cancel">
                Отмена
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DelNotes',
  props: {
    notes: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions('notes', ['delNotes']),
    ...mapActions('dialog', ['openDialog']),
    remove() {
      const data = {
        note_id: this.notes.id,
      };
      this.delNotes(data);
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
