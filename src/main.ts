import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './store/interceptors/loading';
import 'bulma/css/bulma.css';
import './styles.scss';
import {i18n} from './i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

