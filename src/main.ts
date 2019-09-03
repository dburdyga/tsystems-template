import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Buefy from 'buefy';
import 'bulma/css/bulma.css';
import 'buefy/dist/buefy.css';
import './styles.scss';
import {i18n} from './i18n';

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

