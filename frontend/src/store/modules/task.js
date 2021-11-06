const req = require('../../Api/task');

export default {
  actions: {
    async getTask(ctx) {
      try {
        const res = await req.getTask();
        if (res) {
          ctx.commit('UPDATE_TASK', res);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateTask(ctx, data) {
      try {
        await req.upTask(data);
        ctx.dispatch('getTask');
      } catch (e) {
        console.log(e);
      }
    },
    async newTask(ctx, data) {
      try {
        await req.newTask(data);
        ctx.dispatch('getTask');
      } catch (e) {
        console.log(e);
      }
    },
  },

  mutations: {
    UPDATE_TASK(state, worker) {
      state.worker = worker;
    },
  },

  getters: {
    tasks(state) {
      return state.worker;
    },
  },
  state: {
    worker: [],
  },
  namespaced: true,
};
