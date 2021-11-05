<template>
    <v-container
    fluid
    class='mt-10 text-center white--text pa-15' id='office'>
        <p class='text-h3'>
            Офис
        </p>
        <p class='text-h5'>
            Вся ваша команда у вас под рукой и на экране!
        </p>
        <v-carousel
        cycle
        height="700"
        hide-delimiter-background
        show-arrows-on-hover>
            <v-carousel-item
            v-for="(item, key) in items"
            :key="key"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
  name: 'LendingOffice',
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
  }),
};
</script>

<style scoped>
.container{
    width: 100% !important;
    border: 1px transparent solid !important;
    border-radius: 0 10% 10% 0 !important;
    background-color: #3F51B5 !important;
}
</style>
