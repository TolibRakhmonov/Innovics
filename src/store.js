import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: '',
    userId: '',
  },
  mutations: {
    setUserId(state, payload) {
      this.state.userId = payload
    }

  },
  actions: {
    register({ }, arg) {
      axios.post('users/register', { email: arg.email, password: arg.password })

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
    login({ }, arg) {
      axios.post('users/login', { email: arg.email, password: arg.password })

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
    addStarTups({commit, state}, payload) {
      axios.post('startups',payload,
      )
      .then(response => {
        console.log(response);
        router.push('/');
      }).catch(err => {
        console.log(err)
      })
    },


    getInfo({state,commit}) {
      axios.get('/users/me')
        .then(response => {
          console.log('id',response.data.payload._id);
          commit('setUserId',response.data.payload._id)
          console.log(this.state.userId)
        })
        .catch(err => console.log('getInfo', err))
    }
  }
})
