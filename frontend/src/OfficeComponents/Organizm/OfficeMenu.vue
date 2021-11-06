<template>
    <v-container>
        <v-row>
            <v-col
            cols='12'
            sm='4'
            lg='2'>
                <v-row>
                    <v-col cols="6"
                    v-for="(item, key) in menuCfg"
                    :key="key">
                        <nav-card
                        :item="item"/>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
            cols='0'
            sm='4'
            lg='4'
            offset-lg="2"
            class='ufo'
            :style="`background: url(${require('@/assets/img/ufo.png')}) no-repeat`">
            </v-col>
            <v-col
            cols='12'
            sm='4'
            lg='4'
            >
                <v-row v-if="JSON.stringify(notesState)!==JSON.stringify([])">
                    <v-col
                    cols='6'
                    v-for="(item, key) in notesState"
                    :key="key">
                        <notes-card
                        :notes="item"/>
                    </v-col>
                    <v-col
                    cols="12">
                    <router-link to="/notes">
                        <v-btn
                        block
                        dark
                        color="blue">
                            Мои заметки
                        </v-btn>
                    </router-link>
                    </v-col>
                </v-row>
                <v-row
                v-else
                class='mt-15'>
                  <v-col
                    cols='6'
                    class='mx-auto mt-15'>
                        <notes-card
                        :notes="notesDefault"/>
                    </v-col>
                  <v-col
                  cols='12'
                  class="text-center">
                    <router-link to="/notes">
                      <v-btn
                      dark
                      color="blue">
                          Мои заметки
                      </v-btn>
                    </router-link>
                  </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NavCard from '../molecules/NavCard.vue';
import NotesCard from '../molecules/NotesCard.vue';

export default {
  components: { NavCard, NotesCard },
  name: 'OfficeMenu',
  computed: {
    ...mapGetters('notes', ['notesState']),
  },
  data: () => ({
    menuCfg: [
      {
        name: 'Профиль', icon: 'mdi-account-outline', link: '/profile', color: 'red',
      },
      {
        name: 'Чат', icon: 'mdi-chat-outline', link: '/chat', color: 'blue',
      },
      {
        name: 'Команда', icon: 'mdi-human-male-board-poll', link: '/team', color: 'deep-purple darken-2',
      },
      {
        name: 'Задачи', icon: 'mdi-sign-text', link: '/task', color: 'yellow accent-4',
      },
      {
        name: 'Лидеры', icon: 'mdi-podium', link: '/leaderboard', color: 'teal',
      },
      {
        name: 'Игровой офис', icon: 'mdi-gamepad-round-left', link: '/gameoffice', color: 'pink darken-2',
      },
      {
        name: 'Справка', icon: 'mdi-help-circle-outline', link: '/faq', color: 'cyan',
      },
      {
        name: 'Обучение', icon: 'mdi-bookshelf', link: '/ability', color: 'green accent-3',
      },
      {
        name: 'Настройки', icon: 'mdi-cog-outline', link: '/settings', color: 'blue-grey',
      },
      {
        name: 'Магазин', icon: 'mdi-cart-outline', link: '/shop', color: 'orange darken-1',
      },
    ],
    notesDefault: {
      header: 'Хэй, не сильно отвлекаю?', body: `Я твоя заметка, я всегда буду тут и напомню тебе о самом важном, только не забывай обновлять меня, ладно?
    Одновременно на твоём экране могут помещаться 4 заметки, остальные найдешь по кнопочке снизу)`,
    },
  }),
  mounted() {
    this.getNotes('4');
  },
  methods: {
    ...mapActions('notes', ['getNotes']),
  },
};
</script>

<style>
.ufo{
    background-position: center !important;
}
</style>
