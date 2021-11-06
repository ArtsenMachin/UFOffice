<template>
    <v-btn
    fab
    color="white"
    @click="back">
       <img
        :src="require(`@/assets/img/Menu_Burger.svg`)"/>
    </v-btn>
</template>

<script>
export default {
  name: 'BackBtn',
  methods: {
    back() {
      this.$router.push({ path: '/office' });
    },
  },
};
</script>

<style scoped>
img{
    height: 40px !important;
    border-radius: unset !important;
}
</style>
