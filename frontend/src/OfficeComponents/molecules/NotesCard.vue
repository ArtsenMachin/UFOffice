<template>
    <v-sheet
    color="yellow lighten-1"
    elevation="1"
    height="300"
    rounded
    width="100%"
    class='pa-2 mx-auto'
    >
    <div class="text-right" v-if="notes.id">
      <v-icon
      small color="success"
      @click="redNotes">
        mdi-pencil
      </v-icon>
      <v-icon
      small color="red"
      @click="delNotes">
        mdi-delete
      </v-icon>
    </div>
    <p class="text-h5 text--primary">
        {{notes.header}}
    </p>
    {{notes.body}}
    </v-sheet>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NotesCard',
  props: {
    notes: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  methods: {
    ...mapActions('dialog', ['openDialog']),
    redNotes() {
      const dialog = {
        action: 'redNotes',
        elProps: this.notes,
        value: true,
      };
      this.openDialog(dialog);
    },
    delNotes() {
      const dialog = {
        action: 'delNotes',
        elProps: this.notes,
        value: true,
      };
      this.openDialog(dialog);
    },
  },
};
</script>
