import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes/index';
import { store } from '@/store/index';
import { formatDateFilter } from '@/utils/filters';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');

app.config.globalProperties.$filters = {
  formatDate(value) {
    return formatDateFilter(value);
  },
};
