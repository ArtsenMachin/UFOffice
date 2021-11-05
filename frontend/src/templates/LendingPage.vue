<template>
    <v-container
    fluid
    class='pa-0'>
    <nav-bar/>
    <lending-content/>
    </v-container>
</template>

<script>

import NavBar from '../LenComponents/organizm/NavBar.vue';
import LendingContent from './LendingContent.vue';

export default {
  name: 'LengingPage',
  components: {
    NavBar,
    LendingContent,
  },
};
</script>
