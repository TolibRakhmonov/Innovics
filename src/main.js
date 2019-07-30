import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/style.css'
import './assets/js/jquery-3.2.1.min.js'
import './assets/parallax/parallax.js'
import './assets/waypoints/lib/noframework.waypoints.min.js'
import './assets/font-awesome-4.6.3/css/font-awesome.min.css'


// require styles (carousel css)
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

window.axios = axios

window.token = localStorage.getItem('token');

axios.defaults.baseURL = 'https://innovics.herokuapp.com/v1/';
axios.defaults.headers.common['x-auth-token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
