<template>
    <v-sheet
    color="yellow lighten-1"
    elevation="1"
    height="300"
    rounded
    width="100%"
    class='pa-2 mx-auto'
    >
    <p class="text-h5 text--primary">
        {{notes.header}}
    </p>
    {{notes.text}}
    </v-sheet>
</template>

<script>
export default {
  name: 'NotesCard',
  props: {
    notes: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
};
</script>
