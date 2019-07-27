import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';

window.axios = axios

window.token = localStorage.getItem('token');

axios.defaults.baseURL = 'https://innovics.herokuapp.com/v1/users';
axios.defaults.headers.common['x-auth-token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
