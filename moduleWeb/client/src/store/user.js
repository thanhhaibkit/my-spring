import jwtDecode from "jwt-decode";

export default {
  namespaced : true,
  state: {
    user: {
      id: undefined,
      username: undefined,
      roles: [],
      isLogin: false,
      firstName: undefined,
      lastName: undefined,
      accountCode: undefined,
      ticketNumber: undefined,
      birthday: undefined
    }
  },
  getters: {
    getInfoUser: state => {
      return state.user;
    },
    isLogin: state => {
      return state.user["isLogin"];
    }
  },
  mutations: {
    SET_INFO_USER(state, data) {

      let info = jwtDecode(data.token);
      state.user.id = info.userId;
      state.user.username = info.sub;
      state.user.roles = info.role;
      state.user.isLogin = true;
      state.user.firstName = info.firstName;
      state.user.lastName = info.lastName;
      state.user.accountCode = info.accountCode;
      state.user.ticketNumber = info.ticketNumber;
      state.user.birthday = info.birthday;
    },
    REMOVE_INFO_USER(state) {
      state.user.id = undefined;
      state.user.username = undefined;
      state.user.roles = undefined;
      state.user.isLogin = false;
      state.user.firstName = undefined;
      state.user.lastName = undefined;
      state.user.accountCode = undefined;
      state.user.ticketNumber = undefined;
      state.user.birthday = undefined
    }
  },
  actions: {
    setInfoUser({ commit }, data) {
      commit("SET_INFO_USER", data);
    },
    removeInfoUser({ commit }) {
      commit("REMOVE_INFO_USER");
    }
  }
};