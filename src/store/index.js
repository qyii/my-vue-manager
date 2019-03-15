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
  showLayouts: false
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
    setTimeout(() => {
      commit('ON_CHANGE_ROUTE_SUCCESS', route)
    }, 1000)
  },
  REDIRECT ({ commit }) {
    commit('TO_LOGIN')
  },
  LAYOUTS_STATUS ({ commit }, route) {
    commit('ON_LAYOUTS_STATUS', route)
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
  ON_LAYOUTS_STATUS (state, route) {
    if (route.meta.noLayouts) {
      state.showLayouts = false
    } else {
      state.showLayouts = true
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: modules
})
