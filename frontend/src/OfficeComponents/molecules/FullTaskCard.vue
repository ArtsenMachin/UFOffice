<template>
    <v-card
    class='pa-4'>
        <v-card-subtitle>
            {{task.name}}
        </v-card-subtitle>
        <v-card-text>
            {{task.description}}
        </v-card-text>
        <v-card-actions>
            <v-btn
            color="indigo"
            dark
            class='mt-4'
            @click="save"
            >
            Выполнено
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'FullTaskCard',
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    save() {
      console.log('save');
    },
  },
};
</script>
