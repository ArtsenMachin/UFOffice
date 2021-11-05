<template>
    <v-container>
        <div class="task-container"
        :style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
            <div id="overflow">
                <worker-tasks
                v-for="(worker, key) in workers"
                :key="key"
                :worker="worker"/>
            </div>
        </div>
    </v-container>
</template>

<script>
import WorkerTasks from '../molecules/WorkerTasks.vue';

export default {
  name: 'TaskPage',
  components: {
    WorkerTasks,

  },
  data: () => ({
    workers: [
      {
        name: '\u041c\u0430\u0440\u0443\u0441\u0438\u043d \u0410\u0440\u0441\u0435\u043d\u0438\u0439',
        proffesion: '\u0422\u0438\u043c\u043b\u0438\u0434',
        id: '3',
        tasks: [
          {
            name: '\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u043c\u0430\u043a\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f',
            time: '07.11.2021',
            level: 80,
            description: '\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u043c\u0430\u043a\u0435\u0442 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f UFOffice \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 VueJs',
            status: 'active',
            id: 26,
            user_id: 3,
          },
          {
            name: 'C\u043e\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443',
            time: '07.11.2021',
            level: 100,
            description: '\u0421\u043e\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0438\u0437 5 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043d\u0430 \u0445\u0430\u043a\u0430\u0442\u043e\u043d \u0426\u0438\u0444\u0440\u0430',
            status: 'active',
            id: 24,
            user_id: 3,
          },
          {
            name: '\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0440\u043e\u043b\u0438',
            time: '07.11.2021',
            level: 50,
            description: '\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0440\u043e\u043b\u0438 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u043d\u0430 \u0445\u0430\u043a\u0430\u0442\u043e\u043d \u0426\u0438\u0444\u0440\u0430',
            status: 'active',
            id: 25,
            user_id: 3,
          },
          {
            name: '\u0417\u0430\u043f\u0440\u043e\u0441\u044b',
            time: '07.11.2021',
            level: 55,
            description: '\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 backend',
            status: 'active',
            id: 27,
            user_id: 3,
          },
        ],
      },
      {
        name: '\u0410\u043d\u043d\u0430 \u041c\u0430\u0441\u0449\u0451\u043b\u043a\u0438\u043d\u0430',
        proffesion: '\u041f\u0440\u043e\u0435\u043a\u0442\u043e\u0440',
        id: '4',
        tasks: [
          {
            name: '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0431\u0435\u0441\u0442\u0438\u0430\u0440\u0438\u044f',
            time: '07.11.2021',
            level: 50,
            description: '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u0431\u0435\u0441\u0442\u0438\u0430\u0440\u0438\u044f',
            status: 'active',
            id: 35,
            user_id: 4,
          },
          {
            name: '\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442',
            time: '07.11.2021',
            level: 45,
            description: '\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0430\u044e\u0449\u0438\u0439\u0441\u044f \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u0430',
            status: 'active',
            id: 28,
            user_id: 4,
          },
        ],
      },
      {
        name: '\u0427\u0435\u0442\u0432\u0435\u0440\u0438\u043a\u043e\u0432 \u0418\u0432\u0430\u043d',
        proffesion: '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a',
        id: '5',
        tasks: [
          {
            name: '\u0417\u0430\u043f\u0440\u043e\u0441\u044b',
            time: '07.11.2021',
            level: 55,
            description: '\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445',
            status: 'active',
            id: 31,
            user_id: 5,
          },
          {
            name: '\u0432\u044b\u0441\u043f\u0430\u0442\u044c\u0441\u044f ',
            time: '07.11.2021',
            level: 15,
            description: '\u0432\u044b\u0441\u043f\u0430\u0442\u044c\u0441\u044f \u0438 \u0445\u043e\u0440\u043e\u0448\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c!',
            status: 'active',
            id: 37,
            user_id: 5,
          },
          {
            name: '\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440',
            time: '07.11.2021',
            level: 50,
            description: '\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0430 Flask 2.0',
            status: 'active',
            id: 30,
            user_id: 5,
          },
          {
            name: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0411\u0430\u0437\u0443 \u0414\u0430\u043d\u043d\u044b\u0445',
            time: '07.11.2021',
            level: 100,
            description: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 PostgreSQL',
            status: 'active',
            id: 29,
            user_id: 5,
          },
        ],
      },
      {
        name: '\u0426\u0432\u0435\u0442\u043a\u043e\u0432 \u0420\u043e\u043c\u0430\u043d',
        proffesion: '\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440',
        id: '6',
        tasks: [
          {
            name: '\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f',
            time: '07.11.2021',
            level: 45,
            description: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u043e \u0438\u0442\u043e\u0433\u0430\u043c \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430 \u0426\u0438\u0444\u0440\u0430',
            status: 'active',
            id: 34,
            user_id: 6,
          },
          {
            name: '\u041d\u0430\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f',
            time: '07.11.2021',
            level: 20,
            description: '\u041d\u0430\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u0430',
            status: 'active',
            id: 32,
            user_id: 6,
          },
        ],
      },
      {
        name: '\u0421\u0442\u043e\u043b\u0431\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b',
        proffesion: '\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440',
        id: '7',
        tasks: [
          {
            name: '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043c\u0430\u043a\u0435\u0442\u0430',
            time: '07.11.2021',
            level: 45,
            description: '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043c\u0430\u043a\u0435\u0442 \u0431\u0435\u0441\u0442\u0438\u0430\u0440\u0438\u044f',
            status: 'active',
            id: 36,
            user_id: 7,
          },
          {
            name: '\u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u0434\u0438\u0437\u0430\u0439\u043d\u0435 ',
            time: '07.11.2021',
            level: 40,
            description: '\u041f\u043e\u043c\u043e\u0447\u044c \u0432 \u0434\u0438\u0437\u0430\u0439\u043d\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f',
            status: 'active',
            id: 33,
            user_id: 7,
          },
        ],
      },
    ],
  }),

};
</script>

<style scoped>
    .task-container{
        overflow: auto;
        height: 80vh;
        background-color: #000000 !important;
        padding-top: 15px;
        border-radius: 10px;
    }
    #overflow{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 1400px !important;
    }
</style>
