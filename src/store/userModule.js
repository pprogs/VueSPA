
export default {
    namespaced: true,

    state: {
        login: "test login",
        password: "",
        id: -1,
        logedIn: false
    },

    mutations: {
        setLogin(state, newLogin) {
            state.login = newLogin
        }
    },

    actions: {
        login(context, payload) {
            context.commit("setLogin", payload )
        },
    }
}