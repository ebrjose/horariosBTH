import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login.vue'
import Reservas from '@/components/Reservas.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/',
    component: Login,
    meta: { isPublic: true}
  },
  {
    name: 'reservas',
    path: '/reservas',
    component: Reservas
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const isAuthenticated = function() {
  return true
}

router.beforeEach( (to, from, next) => {
  if( !to.meta.isPublic && !isAuthenticated() ) {
    return next({ name: 'login' })
  }

  if (to.name === 'login' && isAuthenticated()) {
    return next({ name: 'reservas' })
  }
  return next()
})

export default router