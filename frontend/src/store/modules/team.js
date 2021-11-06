const req = require('../../Api/team');

export default {
  actions: {
    async getTeam(ctx) {
      try {
        const res = await req.getTeam();
        ctx.commit('UPDATE_TEAM', res);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    UPDATE_TEAM(state, team) {
      state.team = team;
    },
  },
  getters: {
    teamState(state) {
      return state.team;
    },
  },
  state: {
    team: '',
  },
  namespaced: true,
};
