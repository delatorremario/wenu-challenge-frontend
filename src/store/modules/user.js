import axios from "axios";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LOGIN: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/user/login", payload)
          .then(({ data, status }) => {
            if (status === 200) resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    REGISTER: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/user/register", payload)
          .then(({ data, status }) => {
            if (status === 200) resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
