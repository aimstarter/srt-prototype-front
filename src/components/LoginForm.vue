<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form v-on:submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          class="btn"
          type="submit"
          v-bind:disabled="!isUsernameValid || !password"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          // srt-test username: this.username,
          // srt-test password: this.password,
          auto: 'Y',
          check: 'Y',
          page: 'menu',
          deviceKey: '',
          customerYn: '',
          login_referer: 'https://app.srail.or.kr=443/main/main.do',
          srchDvCd: '2',
          srchDvNm: 'aimstarter01@gmail.com',
          hmpgPwdCphd: '7641955munha!',
        };
        const response = await this.$store.dispatch('LOGIN', userData);
        console.log('response:', response);
        // srt-test this.$router.push('/main');
        // this.logMessage = `${data.user.username} 님 환영합니다.`;
      } catch (error) {
        console.log(error.response);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
