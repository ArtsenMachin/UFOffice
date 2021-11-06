<template>
    <v-container>
        <v-row>
            <v-col
            cols='12'
            class='text-h4 indigo--text'>
                Мои заметки
            </v-col>
            <v-col
            cols='6'
            sm='4'
            md='3'
            lg='2'
            v-for="(item, key) in notesState"
            :key="key">
                <notes-card
                :notes="item"/>
            </v-col>
            <v-col
            cols='6'
            sm='4'
            md='3'
            lg='2'>
                <v-sheet
                color="yellow lighten-1"
                elevation="1"
                height="300"
                rounded
                width="100%"
                class='pa-2 mx-auto d-flex flex-col justify-center align-center'
                >
                <v-btn
                x-large
                icon
                @click="addNotes">
                    <v-icon
                    class='text-h2'>
                        mdi-plus
                    </v-icon>
                </v-btn>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NotesCard from '../molecules/NotesCard.vue';

export default {
  name: 'NotesPage',
  components: {
    NotesCard,

  },
  computed: {
    ...mapGetters('notes', ['notesState']),
  },
  mounted() {
    this.getNotes('all');
  },
  methods: {
    ...mapActions('notes', ['getNotes']),
    ...mapActions('dialog', ['openDialog']),
    addNotes() {
      const dialog = {
        action: 'addNotes',
        elProps: '',
        value: true,
      };
      this.openDialog(dialog);
    },
  },
};
</script>
