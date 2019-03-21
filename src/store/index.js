import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import { Message } from 'element-ui'
import router from '@/router'

import { getInfo } from '@/utils/tools'
import { LOGIN_PAGE_PATH } from '@/constants'

import modules from './modules'

Vue.use(Vuex)

const state = {
  userinfo: null,
  route: null,
  isCollapse: false // 菜单是否收起
}

const actions = {
  LOGIN ({ commit }, params) {
    const promise = new Promise((resolve) => {
      sessionStorage.setItem('MY_JWT', params.password)
      resolve()
    })
    return promise
  },
  LOGOUT ({ commit }) {
    const promise = new Promise((resolve) => {
      sessionStorage.removeItem('MY_JWT')
      resolve()
    })
    promise.then(_ => {
      commit('LOGOUT_SUCCESS')
    })
    return promise
  },
  USERINFO ({ commit }) {
    const promise = getInfo()
    promise.then(response => {
      commit('PROFILE_SUCCESS', response)
    })
    return promise
  },
  ON_CHANGE_ROUTE ({ commit }, route) {
    commit('ON_CHANGE_ROUTE_SUCCESS', route)
  },
  REDIRECT ({ commit }) {
    commit('TO_LOGIN')
  },
  TOGGLE_MENU ({ commit }) {
    commit('TOGGLE_MENU_SUCCESS')
  }
}

const mutations = {
  PROFILE_SUCCESS (state, res) {
    state.userinfo = res
  },
  LOGOUT_SUCCESS (state) {
    state.userinfo = null
  },
  TO_LOGIN (state) {
    router.push({ path: LOGIN_PAGE_PATH, query: { redirect: state.route.fullPath } })
  },
  ON_CHANGE_ROUTE_SUCCESS (state, route) {
    state.route = route
  },
  TOGGLE_MENU_SUCCESS (state) {
    state.isCollapse = !state.isCollapse
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: modules
})
