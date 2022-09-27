import FilterPlaceModel from "@/models/FilterPlaceModel";

export default {
  namespaced : true,
  state: {
    filterPlace: new FilterPlaceModel(10, 0, undefined)
  },
  getters: {
    getFilterPlace: state => {
      return state.filterPlace;
    }
  },
  mutations: {
    SET_BY_NAME(state, name) {
      state.filterPlace.name = name;
    },
    SET_BY_PAGE(state, page) {
      state.filterPlace.page = page;
    }
  },
  actions: {
    setByName({ commit }, name) {
      commit("SET_BY_NAME", name);
    },
    setByPage({ commit }, page) {
      commit("SET_BY_PAGE", page);
    }
  }
};