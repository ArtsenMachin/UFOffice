<template>
    <v-container fluid
    class='pa-0'>
        <main-page/>
        <lenging-ability/>
        <lending-office/>
    </v-container>
</template>

<script>
import LendingOffice from '../LenComponents/organizm/LendingOffice.vue';
import LengingAbility from '../LenComponents/organizm/LengingAbility.vue';
import MainPage from '../LenComponents/organizm/MainPage.vue';

export default {
  name: 'LendingContent',
  components: {
    MainPage,
    LengingAbility,
    LendingOffice,

  },
};
</script>
