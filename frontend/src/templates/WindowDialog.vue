<template>
  <v-dialog
    :value="dialogState.value"
    :z-index="999"
    :opacity="0.5"
    max-width="600px"
    @click:outside="close"
  >
    <log-in
      v-if="isAction('login')"
    />
    <sing-in
      v-else-if="isAction('signin')"
    />
    <add-task
      v-else-if="isAction('addTask')"
      :worker="dialogState.elProps"
    />
    <full-task-card
      v-else-if="isAction('openTask')"
      :task="dialogState.elProps"
    />
    <add-notes
    v-else-if="isAction('addNotes')"/>
    <del-notes
    v-else-if="isAction('delNotes')"
    :notes="dialogState.elProps"
    />
    <red-notes
    v-else-if="isAction('redNotes')"
    :notes="dialogState.elProps"
    />
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LogIn from '../LenComponents/molecules/LogIn.vue';
import SingIn from '../LenComponents/molecules/SingIn.vue';
import AddNotes from '../OfficeComponents/molecules/AddNotes.vue';
import AddTask from '../OfficeComponents/molecules/AddTask.vue';
import DelNotes from '../OfficeComponents/molecules/DelNotes.vue';
import FullTaskCard from '../OfficeComponents/molecules/FullTaskCard.vue';
import RedNotes from '../OfficeComponents/molecules/RedNotes.vue';

export default {
  name: 'WindowDialog',
  components: {
    LogIn,
    SingIn,
    AddTask,
    FullTaskCard,
    AddNotes,
    DelNotes,
    RedNotes,
  },
  computed: {
    ...mapGetters('dialog', ['dialogState']),
  },
  methods: {
    ...mapActions('dialog', ['openDialog']),
    close() {
      const dialog = {
        action: '',
        elProps: '',
        value: false,
      };
      this.openDialog(dialog);
    },
    isAction(el) {
      return this.dialogState.action === el;
    },

  },

};
</script>
