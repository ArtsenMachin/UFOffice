<template>
    <v-app-bar
    flat
    color="indigo"
    app
    dark>
    <v-spacer></v-spacer>
    <logo-block/>
    <v-spacer></v-spacer>
    <organization-name/>
    <v-spacer></v-spacer>
    <back-btn/>
    <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
import LogoBlock from '../../LenComponents/atoms/LogoBlock.vue';
import BackBtn from '../atoms/BackBtn.vue';
import OrganizationName from '../atoms/OrganizationName.vue';

export default {
  components: {
    LogoBlock,
    BackBtn,
    OrganizationName,

  },
  name: 'OfficeNavBard',
};
</script>
