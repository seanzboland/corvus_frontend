import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import './assets/scss/app.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://ec2-3-101-47-119.us-west-1.compute.amazonaws.com:8081/api'
// axios.defaults.withCredentials = false
// axios.defaults.headers['Accept'] = 'application/json'
// axios.defaults.headers['Content-Type'] = 'application/json'
// axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:8081'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
