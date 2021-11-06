<template>
    <v-card
    width="300px"
    color="transparent"
    elevation="0">
        <v-row>
            <v-col
            cols='12'
            class='text-center'>
                <p class='text-h5 white--text font-weight-bold'>
                    {{worker.name}}
                </p>
                <p class='text-h6 white--text font-weight-bold'>
                    {{worker.proffesion}}
                </p>
            </v-col>
            <v-col
            cols='12'
            v-for="(task, key) in worker.tasks"
            :key="key">
                <tasks-card
                :task="task"/>
            </v-col>
            <v-col
            cols='12'>
            <v-card
            hover
            width="90%"
            class='mx-auto text-center'
            v-if="isAdmin()"
            @click="addTask">
                <v-card-text>
                    <v-icon>
                        mdi-plus
                    </v-icon>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

import TasksCard from './TasksCard.vue';

export default {
  name: 'WorkerTask',
  props: {
    worker: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  components: {
    TasksCard,

  },
  methods: {
    ...mapActions('dialog', ['openDialog']),
    isAdmin() {
      // return localStorage.getItem('role') === 'teamlead';
      return true;
    },
    addTask() {
      const dialog = {
        action: 'addTask',
        elProps: this.worker.id,
        value: true,
      };
      this.openDialog(dialog);
    },
  },
};
</script>
