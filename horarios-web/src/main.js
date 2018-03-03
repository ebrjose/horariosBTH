import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import router from '@/router'
import EventBus from '@/plugins/event-bus'

Vue.use(BootstrapVue)
Vue.use(EventBus)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
