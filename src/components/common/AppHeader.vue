<template>
  <header>
    <div>
      <router-link v-bind:to="logoLink" class="logo"> SRT </router-link>
      <span v-if="isUserLogin" class="username">{{
        $store.state.username
      }}</span>
    </div>
    <div>
      <div class="navigations">
        <template v-if="isUserLogin">
          <a href="javascript:;" v-on:click="logoutUser" class="logout-button">
            Logout
          </a>
        </template>
        <template v-else>
          <router-link to="/login">로그인</router-link> |
          <router-link to="/">회원가입</router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearToken');
      this.$store.commit('clearUsername');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
  },
  created() {},
};
</script>

<style scoped>
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
