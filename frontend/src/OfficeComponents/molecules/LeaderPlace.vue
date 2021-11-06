<template>
    <v-card
    width="700px"
    max-width="100%"
    flat
    class='mx-auto'>
        <v-timeline >
            <v-timeline-item
            v-for="(place, i) in leader"
            :key="i"
            color="green"
            fill-dot
            >
            <template v-slot:icon>
                <span class='white--text'>{{place.position}}</span>
            </template>
            <template v-slot:opposite>
                <span
                class="headline font-weight-bold red--text"
                v-text="place.rating"
                ></span><br>
                <span>очков</span>
            </template>
        <div class="py-4">
            <h2 class="headline font-weight-light mb-4">
            {{place.name}}
            </h2>
        </div>
        </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
export default {
  name: 'LeaderPlace',
  props: {
    leader: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
