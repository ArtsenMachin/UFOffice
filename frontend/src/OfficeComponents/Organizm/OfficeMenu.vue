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
                <v-row>
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NavCard from '../molecules/NavCard.vue';
import NotesCard from '../molecules/NotesCard.vue';

export default {
  components: { NavCard, NotesCard },
  name: 'OfficeMenu',
  componets: {

  },
  data: () => ({
    notesState: [
      { header: 'Note1', text: 'texttexttext' },
      { header: 'Note2', text: 'texttexttext' },
      { header: 'Note3', text: 'texttexttext' },
      { header: 'Note4', text: 'texttexttext' },
    ],
    menuCfg: [
      {
        name: 'Профиль', icon: 'mdi-account-outline', link: '/profile', color: 'red',
      },
      {
        name: 'Чат', icon: 'mdi-chat-outline', link: '/chat', color: 'blue',
      },
      {
        name: 'Команда', icon: 'mdi-human-male-board-poll', link: '/team', color: 'teal',
      },
      {
        name: 'Задачи', icon: 'mdi-sign-text', link: '/task', color: 'yellow accent-4',
      },
      {
        name: 'Лидеры', icon: 'mdi-podium', link: '/leaderboard', color: 'deep-purple darken-2',
      },
      {
        name: 'Игра', icon: 'mdi-gamepad-round-left', link: '/gameoffice', color: 'pink darken-2',
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
  }),
};
</script>

<style>
.ufo{
    background-position: center !important;
}
</style>
