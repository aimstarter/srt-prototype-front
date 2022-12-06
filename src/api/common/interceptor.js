import { store } from '@/store/index';

function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      console.log('req:', config);
      config.headers.Authorization = store.state.token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function (response) {
      console.log('res:', response);
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return instance;
}

export { setInterceptors };
