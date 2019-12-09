import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import User from "./modules/user";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    }
  },
  actions: {
    loadCharacters({ commit }) {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(data => {
          let characters = data.data;
          commit("SET_CHARACTERS", characters);
        })
        .catch(err => console.log(err));
    }
  },
  modules: {
    user: User
  }
});
