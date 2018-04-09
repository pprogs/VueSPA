
import Vue from 'vue'
import Vuex from 'vuex'

import vuexI18n from 'vuex-i18n';

import ru from './ru'
import en from './en'

export default (store) => {

    Vue.use(vuexI18n.plugin, store);

    Vue.i18n.add('en', en);
    Vue.i18n.add('ru', ru);

    store.commit('locale','ru');
    Vue.i18n.set('ru');   
}