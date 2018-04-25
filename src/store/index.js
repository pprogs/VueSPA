import Vue from "vue";
import Vuex from "vuex";

import userModule from "./modules/userModule";
import gameModule from "./modules/gameModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    loc: "ru",
    message: "Some Test Message",
    title: "SomeTitle"
  },

  getters: {
    currentLocale: state => state.loc
  },

  modules: {
    user: userModule,
    game: gameModule
  },

  mutations: {
    setTitle(state, title) {
      state.title = title;
    },

    locale(state, locale) {
        state.loc = locale;
    }
  }
});
