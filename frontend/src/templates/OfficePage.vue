<template>
    <v-container
    fluid
    class='pa-0'>
        <office-nav-bar/>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-container>
</template>

<script>
import OfficeNavBar from '../OfficeComponents/molecules/OfficeNavBar.vue';

export default {
  name: 'OfficePage',
  components: {
    OfficeNavBar,

  },
};
</script>
