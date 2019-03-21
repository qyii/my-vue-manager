import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Layout from '@/components/layouts'
import Home from '@/pages/index'
import Login from '@/pages/login'
import $404 from '@/pages/404'
import $403 from '@/pages/403'

import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: { name: '首页' }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { noLayouts: true }
    },
    {
      path: '/404',
      name: '404',
      component: $404,
      meta: { noLayouts: true }
    },
    {
      path: '/403',
      name: '403',
      component: $403,
      meta: { noLayouts: true }
    }
  ]
})

store.dispatch('permission/GET_ASYNC_ROUTE')
router.addRoutes([...store.state.permission.asyncRouter, { path: '*', redirect: '/404', hidden: true }])
router.beforeEach(beforeEach)
export default router
