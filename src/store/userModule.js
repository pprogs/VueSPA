import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT, USER_REGISTER } from "./actions";
import Api from "~/api"

export default {
  namespaced: false,

  //------------------------------
  // state

  state: {
    login: "test login",
    password: "",
    id: -1,
    logedIn: false,

    token: localStorage.getItem("user-token") || "",
    status: ""
  },

  //------------------------------
  // getters

  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },

  //------------------------------
  // mutations

  mutations: {

    [AUTH_REQUEST]: state => {
      state.status = "loading";
    },

    [AUTH_SUCCESS]: (state, token) => {
      state.status = "success";
      state.token = token;
    },

    [AUTH_ERROR]: state => {
      state.status = "error";
    },

    [AUTH_LOGOUT]: state => {
      state.token = undefined;
      state.status = undefined;
    }
  },

  //------------------------------
  // actions

  actions: {

    //
    //
    //
    [AUTH_REQUEST]: (context, user) => {

      return new Promise((resolve, reject) => {
     
        Api.authUser( user ).then(
          user => {

            console.log('store auth_req success');
            console.log(user);

            const token = 'user.token'
            localStorage.setItem('user-token', token)

            context.commit(AUTH_SUCCESS, token)

            resolve(user)
          },
          error => {
          
            console.log('dispatch auth req error');
            console.log(error);

            context.commit(AUTH_ERROR, error);
            localStorage.removeItem('user-token') ;

            reject(error)
          }
        );
      });
    },

    [USER_REGISTER]: (context, user) => {

      return new Promise( (resolve, reject) => {

        

      });
    },

    [AUTH_LOGOUT]: (context) => {
      context.commit(AUTH_LOGOUT);
      localStorage.removeItem('user-token') ;
    }
  }
};
