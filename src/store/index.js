import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './userModule'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        count: 0,
        message: "Some Test Message",
        title: "SomeTitle"
    },
    
    modules: {
        user: userModule
    },

    mutations: {
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






