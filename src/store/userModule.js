import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from "./actions";
import Api from "~/api"

export default {
  namespaced: false,

  state: {
    login: "test login",
    password: "",
    id: -1,
    logedIn: false,

    token: localStorage.getItem("user-token") || "",
    status: ""
  },

  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },

  mutations: {
    setLogin(state, newLogin) {
      state.login = newLogin;
    },

    [AUTH_REQUEST]: state => {
      state.status = "loading";
    },

    [AUTH_SUCCESS]: (state, token) => {
      state.status = "success";
      state.token = token;
    },

    [AUTH_ERROR]: state => {
            state.status = "error";
    }
  },

  actions: {
    login(context, payload) {
      context.commit("setLogin", payload);
    },

    [AUTH_REQUEST]: ({ commit, dispatch }, user) => {

      return new Promise((resolve, reject) => {
     
        Api.authUser( user ).then(
            user => {

                    const token = 'user.token'

                    localStorage.setItem('user-token', token) // store the token in localstorage
                    commit(AUTH_SUCCESS, token)

                    // you have your token, now log in your user :)
                    dispatch(USER_REQUEST)

                    resolve(user)
            },
            error => {

                    commit(AUTH_ERROR, error)
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(error)
            }
        );


        /*                 axios({url: 'auth', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.token

                    localStorage.setItem('user-token', token) // store the token in localstorage

                    commit(AUTH_SUCCESS, token)

                    // you have your token, now log in your user :)
                    dispatch(USER_REQUEST)
                    resolve(resp)
                }) */

        /*                 .catch(err => {

                    commit(AUTH_ERROR, err)
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)

                }) */
      });
    }
  }
};
