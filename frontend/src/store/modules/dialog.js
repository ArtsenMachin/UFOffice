export default {
  actions: {
    openDialog(ctx, dialog) {
      ctx.commit('UPDATE_WINDOW', dialog);
    },
  },
  mutations: {
    UPDATE_WINDOW(state, dialog) {
      state.dialog = dialog;
    },
  },
  getters: {
    dialogState(state) {
      return state.dialog;
    },
  },
  state: {
    dialog: {
      action: '',
      elProps: '',
      value: false,
    },
  },
  namespaced: true,
};
