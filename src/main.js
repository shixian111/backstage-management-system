// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import store from './store'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import './icons'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false


const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
