const req = require('../../Api/notes');

export default {
  actions: {
    async getNotes(ctx, data) {
      try {
        const res = await req.getNotes(data);
        if (res) {
          ctx.commit('UPDATE_NOTES', res);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateNotes(ctx, data) {
      try {
        await req.upNotes(data);
        ctx.dispatch('getNotes', 'all');
      } catch (e) {
        console.log(e);
      }
    },
    async newNotes(ctx, data) {
      try {
        await req.newNotes(data);
        ctx.dispatch('getNotes', 'all');
      } catch (e) {
        console.log(e);
      }
    },
    async delNotes(ctx, data) {
      try {
        await req.delNotes(data);
        ctx.dispatch('getNotes', 'all');
      } catch (e) {
        console.log(e);
      }
    },
  },

  mutations: {
    UPDATE_NOTES(state, notes) {
      state.notes = notes;
    },
  },

  getters: {
    notesState(state) {
      return state.notes;
    },
  },
  state: {
    notes: [],
  },
  namespaced: true,
};
