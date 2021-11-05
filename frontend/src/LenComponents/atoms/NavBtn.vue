<template>
<a :href="action.link">
    <v-btn text>
      {{action.msg}}
    </v-btn>
</a>
</template>

<script>
export default {
  name: 'NavBtn',
  props: {
    action: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
};
</script>
