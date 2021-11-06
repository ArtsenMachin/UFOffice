<template>
    <v-container>
        <v-card
        width="800px"
        max-width='100%'
        class='mx-auto'
        flat>
            <v-card-subtitle class='text-center text-h4 indigo--text'>
                Ваши достижения
            </v-card-subtitle>
            <v-card-text>
                <v-row>
                    <v-col
                    cols='12'
                    sm='6'
                    class='text-center'>
                        <span class='text-h4 red--text'>
                            {{UserRating.rating}}
                        </span>
                        <p>Очков</p>
                    </v-col>
                    <v-col
                    cols='12'
                    sm='6'
                    class='text-center'>
                        <span class='text-h4 red--text'>
                            {{UserRating.position}}
                        </span>
                        <p>Место</p>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-row>
            <v-col
            cols='12'>
                <span class='text-h4 indigo--text'>
                    Таблица Лидеров
                </span>
                <v-divider></v-divider>
            </v-col>
            <v-col
            cols='12'>
                <leader-place
                :leader="LeaderState"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LeaderPlace from './LeaderPlace.vue';

export default {
  components: { LeaderPlace },
  name: 'TeamLeader',
  computed: {
    ...mapGetters('app', ['LeaderState', 'UserRating']),
  },
  mounted() {
    this.getLeaderboard();
  },
  methods: {
    ...mapActions('app', ['getLeaderboard']),
  },
};
</script>
