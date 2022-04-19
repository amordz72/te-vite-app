import { createStore } from "vuex";

export default createStore({
  state: {

    isLogin: false,
    user: null,
  },
  getters: {},
  mutations: {
    fill_user(state, user) {
      state.user = user;
      state.isLogin = true
    },
    remove_user(state) {
      state.user = null;
      state.isLogin = false
    },
  }
  , actions: {
    set_user(context, acount) {
      context.commit('fill_user', acount );
    },
    destroy_user(context) {
      context.commit('remove_user');
    }
  }

  , modules: {

  }
});
