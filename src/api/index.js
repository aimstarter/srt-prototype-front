import axios from 'axios';
import { setInterceptors } from './common/interceptor';

function createInstance() {
  return axios.create({
    // srt-test baseURL: process.env.VUE_APP_API_URL,
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
  });
}

function createIntanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    withCredentials: true,
  });
  return setInterceptors(instance);
}

const instance = createInstance();
const posts = createIntanceWithAuth('posts');

// const config = {
//   baseUrl: 'http://localhost:3000';
// }

export { posts, instance };
