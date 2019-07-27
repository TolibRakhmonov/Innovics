import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {


  },
  actions: {
    register({ }, arg) {
      axios.post('/register', { email: arg.email, password: arg.password })

        .then((response) => {
          console.log(response);
          let accessToken = response.data.payload;
          localStorage.setItem('token', accessToken);
          localStorage.setItem('user', response.data.user);
          axios.defaults.headers.common['x-auth-token'] = accessToken;
          window.isSignedIn = true;
          router.push('/');
        })


        .catch((error) => {
          console.log(error);
        })
    },

    getInfo() {
      axios.get('/me')
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log('getInfo', err))
    }
  }
})
