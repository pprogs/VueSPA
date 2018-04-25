import Game from "~/game";

export default {
  namespaced: true,

  //------------------------------
  // state

  state: {
    game: new Game()
  },

  //------------------------------
  // getters

  getters: {
    resources: state => state.game.resourcesStats
  },

  //------------------------------
  // mutations

  mutations: {},

  //------------------------------
  // actions

  actions: {}
};
