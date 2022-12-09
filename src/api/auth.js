// 로그인, 회원가입, 회원탈퇴
import { instance } from './index';

function registerUser(userData) {
  return instance.post('signup', userData);

  // const url = 'http://localhost:3000/signup';
  //return axios.post(url, userData);
}

function loginUser(userData) {
  // srt-test return instance.post('login', userData);
  return instance.post('login', userData);
}

function reserveTicket(userData) {
  console.log('axios Call!');
  // srt-test return instance.post('login', userData);
  return instance.post('reserve', userData);
}

export { registerUser, loginUser, reserveTicket };
