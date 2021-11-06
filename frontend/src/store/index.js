import Vue from 'vue';
import Vuex from 'vuex';
import task from './modules/task';
import dialog from './modules/dialog';
import team from './modules/team';
import notes from './modules/notes';

const req = require('../Api/leaderboard');

Vue.use(Vuex);

const app = {
  actions: {
    async getLeaderboard(ctx) {
      try {
        const res = await req.getLeaderboard();
        ctx.commit('UPDATE_LEADERBOARD', res);
        ctx.dispatch('getUserRating');
      } catch (e) {
        console.log(e);
      }
    },
    async getUserRating(ctx) {
      try {
        const res = await req.getUserRating();
        ctx.commit('UPDATE_RATING', res);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    UPDATE_LEADERBOARD(state, data) {
      state.Leaderboard = data;
    },
    UPDATE_RATING(state, data) {
      state.UserRating = data;
    },
  },
  getters: {
    LeaderState(state) {
      return state.Leaderboard;
    },
    UserRating(state) {
      return state.UserRating;
    },
  },
  state: {
    Leaderboard: [],
    UserRating: {},
  },
  namespaced: true,
};

export default new Vuex.Store({
  modules: {
    task, dialog, app, team, notes,
  },
});
