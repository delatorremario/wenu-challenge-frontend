import axios from "axios";

export default {
  state: {
    token: localStorage.getItem("user-token") || null
  },
  getters: {
    loggedIn(state) {
      return state.token != null;
    }
  },
  mutations: {
    destroyToken(state) {
      state.token = null;
    },
    retrieveToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    destroyToken({ commit }) {
      return new Promise((resolve, reject) => {
        commit("destroyToken");
        localStorage.removeItem("user-token");
        resolve(true);
      });
    },
    LOGIN: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/user/login", payload)
          .then(({ data, status }) => {
            if (status === 200) {
              localStorage.setItem("user-token", data.token); // store the token in localstorage
              commit("retrieveToken", data.token);
              resolve(true);
            }
          })
          .catch(err => {
            localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
            commit("retrieveToken", null);
            reject(err);
          });
      });
    },
    REGISTER: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/user/register", payload)
          .then(({ data, status }) => {
            console.log("TCL: data", data);
            if (status === 200) resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
