import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import b from './views/about.vue'
import home from './views/home.vue'
import a from './views/button.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(BootstrapVue)
Vue.use(VueRouter)


const routes = [
  {path: '/about' , component: b},
  {path: '/home' , component: home},
  {path: '/button' , component: a}

]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

