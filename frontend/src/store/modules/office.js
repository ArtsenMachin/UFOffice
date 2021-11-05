import axios from 'axios';

export default {
  actions: {
    async getTask(ctx) {
      const path = 'http://26.237.70.37:5000/tasks?org_id=1';
      let data;
      axios.get(path)
        .then((res) => {
          data = res.data;
          ctx.commit('updateTask', data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async getTeam(ctx) {
      const user = localStorage.id;
      const path = `http://26.237.70.37:5000/team?user_id=${user}`;
      let data;
      axios.get(path)
        .then((res) => {
          data = res.data;
          ctx.commit('updateTeam', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getLiderboard(ctx) {
      const user = localStorage.id;
      const path = `http://26.237.70.37:5000/leaderboard?user_id=${user}`;
      let data;
      axios.get(path)
        .then((res) => {
          data = res.data;
          ctx.commit('updateTeam', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getUserRating(ctx) {
      const user = localStorage.id;
      const path = `http://26.237.70.37:5000/userrating?user_id=${user}`;
      let data;
      axios.get(path)
        .then((res) => {
          data = res.data;
          ctx.commit('updateUserRating', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getOrganization(ctx) {
      const user = localStorage.id;
      const path = `http://26.237.70.37:5000/organization?user_id=${user}`;
      let data;
      axios.get(path)
        .then((res) => {
          data = res.data;
          ctx.commit('updateOrg', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async readyCard(ctx, id) {
      const path = 'http://26.237.70.37:5000/update_task';
      let data;
      const taskInfo = {
        task_id: id,
      };
      axios.post(path, taskInfo)
        .then((res) => {
          data = res.data;
          ctx.commit('updateTask', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async DeleteTeamWorker(ctx, id) {
      const path = 'http://26.237.70.37:5000/delete_worker';
      let data;
      const workerInfo = {
        task_id: id,
      };
      axios.post(path, workerInfo)
        .then((res) => {
          data = res.data;
          ctx.commit('updateTeam', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getNewTeam(ctx) {
      const path = 'http://26.237.70.37:5000/get_new_team';
      let data;
      const userInfo = {
        login: localStorage.login,
        token: localStorage.token,
      };
      axios.get(path, userInfo)
        .then((res) => {
          data = res.data;
          ctx.commit('updateNewTeam', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async addNewTeam(ctx, workers) {
      const path = 'http://26.237.70.37:5000/add_new_team';
      let data;
      const teamInfo = workers;
      axios.post(path, teamInfo)
        .then((res) => {
          data = res.data;
          ctx.commit('updateTeam', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async newTask(ctx, task) {
      const path = 'http://26.237.70.37:5000/add_new_task';
      let data;
      const taskInfo = task;
      axios.post(path, taskInfo)
        .then((res) => {
          data = res.data;
          ctx.commit('updateTask', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  mutations: {
    updateTask(state, worker) {
      state.worker = worker;
    },
    updateTeam(state, team) {
      state.team = team;
    },
    updateLider(state, lider) {
      state.lider = lider;
    },
    updateOrg(state, data) {
      state.org_name = data;
    },
    updateUserRating(state, data) {
      state.user_rating = data;
    },
    updateNewTeam(state, data) {
      state.new_worker = data;
    },

  },

  getters: {
    TaskWorker(state) {
      return state.worker;
    },
    TeamWorker(state) {
      return state.team;
    },
    Liderboard(state) {
      return state.lider;
    },
    Organization(state) {
      return state.org_name;
    },
    userRating(state) {
      return state.user_rating;
    },
    newWorker(state) {
      return state.new_worker;
    },
  },
  state: {
    worker: '',
    team: '',
    org_name: 'МИКУЛЬСКАЯ',
    new_worker: [],
  },
  namespaced: true,
};
