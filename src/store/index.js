import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  // srt-test saveAuthToCookie,
  // srt-test saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

const store = new Vuex.Store({
  state: {
    token: getAuthFromCookie() || '',
    username: getUserFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    clearToken(state) {
      state.token = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN(userData) {
      const { data } = await loginUser(userData);
      console.log('data:', data);

      // srt-test commit('setToken', data.token);
      // srt-test commit('setUsername', data.user.username);
      // srt-test saveAuthToCookie(data.token);
      // srt-test saveUserToCookie(data.user.username);

      return data;
    },
  },
});

export { store };
