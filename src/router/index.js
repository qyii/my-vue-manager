import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index'
import Login from '@/pages/login'
import $404 from '@/pages/404'

import beforeEach from './beforeEach'

import SystemRouter from './system.router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: $404,
      meta: { noLayouts: true }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { activeMenu: '/' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { noLayouts: true }
    },
    ...SystemRouter
  ]
})

router.beforeEach(beforeEach)
export default router
