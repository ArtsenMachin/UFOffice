import Vue from 'vue';
import Vuex from 'vuex';
import office from './modules/office';
import dialog from './modules/dialog';

Vue.use(Vuex);

const app = {
  actions: {

  },
  mutations: {

  },
  getters: {

  },
  state: {

  },
  namespaced: true,
};

export default new Vuex.Store({
  modules: {
    office, dialog, app,
  },
});
