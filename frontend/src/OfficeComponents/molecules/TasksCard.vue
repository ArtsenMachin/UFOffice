<template>
    <v-card
    hover
    width="90%"
    class='mx-auto'
    @click="openTask">
        <v-card-title
        class='red--text'>
            <span class='text-subtitle-1'>
                <v-icon
                color="red"
                small>
                    mdi-star-half
                </v-icon>
                {{task.level}}
            </span>
        </v-card-title>
        <v-card-text class='text-left'>
            <p class='black--text'>{{task.name}}</p>
            <v-chip
            :class='task.status' dark>
                {{task.time}}
            </v-chip>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskCard',
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions('dialog', ['openDialog']),
    openTask() {
      const dialog = {
        action: 'openTask',
        elProps: this.task,
        value: true,
      };
      this.openDialog(dialog);
    },
  },
};
</script>

<style scoped>
.v-card{
    border-radius: 5px !important;
}
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
