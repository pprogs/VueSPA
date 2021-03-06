import Vue from "vue";
import axios from "axios";

export const Errors = {
  NO_CONN: 503,
  INT: 500
};

export const UserApi = {
  Ax: axios.create({
    baseURL: "http://localhost:8081/api/",
    timeout: 1000,
    headers: { "Access-Control-Allow-Origin": "*" }
  }),

  //
  //
  //
  getUserInfo(id) {
    console.log("getUserInfo");

    return this.Ax.get(`user/${id}`);
  },

  //
  authUser(user) {
    console.log("authUser");

    return new Promise((resolve, reject) => {
      this.Ax
        .post("auth", user)
        .then(response => {
          console.log("authUser responce");

          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
          reject(Errors.INT);
        })
        .catch(error => {
          console.log("authUser error");

          if (error.response) {
            // check error codes
            reject(error.response.status);
          }

          // no connection
          reject(Errors.NO_CONN);
        });
    });
  },

  //
  registerUser(user) {
    console.log("registerUser");

    return new Promise((resolve, reject) => {
      this.Ax
        .post("register", user)
        .then(responce => {
          console.log("authUser responce");

          resolve(responce);
        })
        .catch(error => {
          console.log("authUser error");

          reject(error.body);
        });
    });
  },

  //
  checkUserName(name) {
    return true;
  }
};
