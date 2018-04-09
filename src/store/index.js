import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './userModule'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        count: 0,
        loc: 'ru',
        message: "Some Test Message",
        title: "SomeTitle"
    },

    getters: {
        currentLocale: state => state.loc,
    },
    
    modules: {
        user: userModule
    },

    mutations: {

        locale(state,loc) {
            state.loc = loc;
        },
        increment(state) {
            state.count += 1
        },
        setMessage(state, p) {
            state.message = p
        },
        setTitle(state, title) {
            state.title = title
        }
    }
}
)






