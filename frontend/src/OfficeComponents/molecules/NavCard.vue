<template>
<router-link :to="item.link">
    <v-card
    width="110px"
    class='text-center mx-auto'
    elevation="0"
    >
        <v-avatar
        size="80"
        :color="item.color">
            <v-icon
            dark
            large>
                {{item.icon}}
            </v-icon>
        </v-avatar>
        <v-card-text>
            {{item.name}}
        </v-card-text>
    </v-card>
</router-link>
</template>

<script>
export default {
  name: 'NavCard',
  props: {
    item: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
};
</script>
