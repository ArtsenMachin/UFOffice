<template>
    <v-container>
        <div class="task-container"
        :style="`background: url(${require('@/assets/img/back-link-2.png')}) repeat`">
            <div id="overflow">
                <worker-tasks
                v-for="(worker, key) in tasks"
                :key="key"
                :worker="worker"/>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import WorkerTasks from '../molecules/WorkerTasks.vue';

export default {
  name: 'TaskPage',
  components: {
    WorkerTasks,

  },
  mounted() {
    this.getTask();
  },
  computed: {
    ...mapGetters('task', ['tasks']),
  },
  methods: {
    ...mapActions('task', ['getTask']),
  },

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
