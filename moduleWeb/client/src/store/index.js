import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import loading from "./loading";
import user from "./user";
import placeBooking from "./placeBooking";

const store = new Vuex.Store({
  modules: {
    loading,
    user,
    placeBooking
  },
  plugins: [createPersistedState({
    paths: ['user']
  })]
});

export default store;