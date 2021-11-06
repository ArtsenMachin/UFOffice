<template>
    <v-card
    class='pa-4'>
        <v-card-subtitle class='text-h6 font-weight-bold'>
            {{task.name}}
        </v-card-subtitle>
        <v-card-text>
          <div>
            <span>Срок:&nbsp;{{task.time}}&nbsp;</span>
            <v-chip :class="task.status" class='text--white' dark>{{alert}}</v-chip>
          </div>
            {{task.description}}
        </v-card-text>
        <v-card-actions>
            <v-btn
            color="indigo"
            dark
            class='mt-4'
            @click="save"
            v-if="write_btn"
            >
              Выполнено
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FullTaskCard',
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    alert: '',
    write_btn: false,
  }),
  mounted() {
    this.getAlerts();
  },

  methods: {
    ...mapActions('task', ['updateTask']),
    save() {
      const taskInfo = {
        id: this.task.id,
      };
      this.updateTask(taskInfo);
    },
    getAlerts() {
      if (this.task.status === 'active') {
        this.alert = 'В работе';
      } else if (this.task.status === 'inactive') {
        this.alert = 'Успешно!';
      } else {
        this.alert = 'ПРОСРОЧЕНО!';
      }
      if (this.task.user_id === Number(localStorage.id) && this.task.status !== 'inactive') {
        this.write_btn = true;
      }
    },
  },
};
</script>

<style scoped>
.active{
    background-color: #3F51B5 !important;
}
.inactive{
    background-color: #009688 !important;
}
.stillactive{
    background-color: #F44336 !important;
}
</style>
