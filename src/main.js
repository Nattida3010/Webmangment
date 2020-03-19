import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import AllDevices from './views/AllDevices.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSimpleAlert from "vue-simple-alert";
import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(VueSweetalert2);
Vue.use(VueSimpleAlert);
Vue.prototype.$http = axios
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [


  {path: '/AllDevices', component:  AllDevices},


]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

