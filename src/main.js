import Vue from 'vue'
import App from './App.vue'
import router from './configs/router'
import store from './configs/store'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
