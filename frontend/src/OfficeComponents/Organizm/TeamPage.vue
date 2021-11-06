<template>
    <v-container class='mt-n12'>
        <v-row>
            <v-col
            cols='12'
            class='text-center'>
                <span class='text-h4'>{{teamState[i].name}}</span>
                <p class='text-subtitle-1'>{{teamState[i].proffesion}}</p>
            </v-col>
            <v-col
            cols="12"
            md="4"
            lg="3">
                <v-card
                outlined
                widht="300px"
                max-width="100%"
                class='mx-auto'>
                    <v-card-subtitle
                    class='text-center text-overline black--text'>
                        Навыки
                    <v-divider></v-divider>
                    </v-card-subtitle>
                    <v-card-text>
                        <v-row justify="space-around">
                            <v-avatar
                            size="48"
                            color="grey lighten-2"
                            class='mt-2'
                            v-for="(skills, i) in teamState[i].skills"
                            :key="i">
                                <img :src="skills.skill_img">
                            </v-avatar>
                        </v-row>
                    </v-card-text>
                    <div class="text-center mb-4 mt-2">
                            <span>Рейтинг:</span>
                            <v-icon
                            color='red'
                            small>
                                mdi-star-half
                            </v-icon>
                            <span>{{teamState[i].rating}}</span>
                        </div>
                </v-card>
            </v-col>
            <v-col
            cols="12"
            md="4"
            lg="6"
            class='text-center'>
                <img v-bind:src="teamState[i].img" class='workerPhoto'/>
                <div class="text-h4 indigo--text mt-4">{{teamState[i].work}}</div>
                <p>{{teamState[i].ttd}}</p>
            </v-col>
            <v-col
            cols="12"
            md="4"
            lg="3">
                <v-card
                outlined
                widht="300px"
                max-width="100%"
                class='mx-auto'>
                    <v-card-subtitle
                    class='text-center text-overline black--text'>
                        Контактные данные
                    <v-divider></v-divider>
                    </v-card-subtitle>
                    <v-card-text class='text-left'>
                        <div class="mt-2">
                            телефон: &nbsp;
                            <span class='black--text'>
                                <a v-bind:href="teamState[i].phone">{{teamState[i].phone}}</a>
                            </span>
                        </div>
                        <div class="mt-2">
                            почта: &nbsp;
                            <span class='black--text'>
                                <a v-bind:href="`mailto:`+teamState[i].mail">
                                    {{teamState[i].mail}}</a>
                            </span>
                        </div>
                        <v-row justify="space-around mt-2">
                            <router-link :to="teamState[i].tg">
                                <v-btn
                                fab
                                outlined
                                color="indigo"
                                dark
                                >
                                    TG
                                </v-btn>
                            </router-link>
                            <router-link :to="teamState[i].vk">
                                <v-btn
                                fab
                                outlined
                                color="indigo"
                                dark
                                >
                                    VK
                                </v-btn>
                            </router-link>
                            <router-link :to="teamState[i].fb">
                                <v-btn
                                fab
                                outlined
                                color="indigo"
                                dark
                                >
                                    FB
                                </v-btn>
                            </router-link>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
            cols="6"
            md="4"
            lg="3"
            class='text-center mt-n16'>
                <v-btn
                icon
                color="red"
                x-large
                class="mt-n16"
                @click="prev"
                >
                    <v-icon class='text-h2'>
                        mdi-arrow-left
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col
            cols="0"
            md="4"
            lg="6">

            </v-col>
            <v-col
            cols="6"
            md="4"
            lg="3"
            class='text-center mt-n16'>
                <v-btn
                icon
                color='red'
                class="mt-n16"
                x-large
                @click="next">
                    <v-icon class='text-h2'>
                        mdi-arrow-right
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col
            cols='12'
            >
                <div class="d-flex mx-auto" id='overflow'>
                    <v-card
                    outlined
                    @click="i = Number(worker.position)"
                    min-width="280px"
                    class='mx-5 mb-5'
                    v-for="worker in teamState" :key="worker.id">
                        <v-card-text>
                            <v-avatar
                                class="profile"
                                color="white"
                                size="90"
                                tile
                            >
                                <v-img :src="worker.img"></v-img>
                            </v-avatar>
                            <div class="text-h5">{{worker.name}}</div>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TeamPage',
  computed: {
    ...mapGetters('team', ['teamState']),
  },
  data: () => ({
    i: 0,
  }),
  mounted() {
    this.getTeam();
  },
  methods: {
    ...mapActions('team', ['getTeam']),
    prev() {
      if (this.i === 0) {
        this.i = this.teamState.length - 1;
      } else {
        this.i += 1;
      }
    },
    next() {
      if (this.i === this.teamState.length - 1) {
        this.i = 0;
      } else {
        this.i += 1;
      }
    },
  },
};
</script>

<style scoped>
.v-avatar img{
    width: 35px !important;
    height: auto !important;
    border-radius: unset !important;
}
.workerPhoto{
    max-height: 410px;
}
#overflow{
    width: 1400px !important;
    overflow: auto !important;
}
</style>
