<template>
    <v-container
    class='mt-n16 pa-0'
    fluid>
      <v-tabs
      v-model="tab"
      dark
      background-color="green"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <team-leader
          v-if="item==='Команда'"

        />
        <org-leader
          v-else
        />
      </v-tab-item>
    </v-tabs-items>
    </v-container>
</template>

<script>
import OrgLeader from '../molecules/OrgLeader.vue';
import TeamLeader from '../molecules/TeamLeader.vue';

export default {
  name: 'LeaderBoard',
  components: {
    OrgLeader, TeamLeader,
  },
  data: () => ({
    tab: null,
    items: ['Команда', 'Организация'],
  }),
};
</script>
