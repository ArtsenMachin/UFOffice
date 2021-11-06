<template>
    <v-card
    class='pa-4'>
        <v-form
        width="90%"
        class="text-center mx-auto"
        @submit.prevent="add">
            <p class="text-h5">
                Добавить задачу
            </p>
            <v-text-field
                v-model="taskInfo.name"
                label="Название"
                hide-details="auto"
            >
            </v-text-field>
            <v-textarea
                v-model="taskInfo.desc"
                label="Описание"
                hide-details="auto"
            >
            </v-textarea>
            <v-text-field
                v-model="taskInfo.rating"
                label="Рейтинг"
                hide-details="auto"
                type="number"
            >
            </v-text-field>
            <div>
              <v-date-picker
                v-model="taskInfo.data"
                color="green lighten-1"
                class='mx-auto mt-4'
              ></v-date-picker>
            </div>
            <v-btn
            color="indigo"
            dark
            class='mt-4'
            @click="add"
            >
            Создать
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTask',
  props: {
    worker: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    taskInfo: {
      name: '',
      rating: '',
      data: (new Date(Date.now() - (new Date()).getTimezoneOffset()
      * 60000)).toISOString().substr(0, 10),
      desc: '',
      id: '',
    },
  }),
  methods: {
    ...mapActions('task', ['newTask']),
    add() {
      this.taskInfo.id = this.worker;
      this.newTask(this.taskInfo);
    },
  },

};
</script>
