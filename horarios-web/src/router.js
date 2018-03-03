import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Docentes from '@/components/Docentes.vue'
import Aulas from '@/components/Aulas.vue'
import Materias from '@/components/Materias.vue'
import Horarios from '@/components/Horarios.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: { isPublic: true}
  },
  {
    name: 'docentes',
    path: '/docentes',
    component: Docentes
  },
  {
    name: 'aulas',
    path: '/aulas',
    component: Aulas
  },
  {
    name: 'materias',
    path: '/materias',
    component: Materias
  },
  {
    name: 'horarios',
    path: '/horarios',
    component: Horarios
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