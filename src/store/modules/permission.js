// import axios from 'axios'
import menuList from '@/mock/menulist'
import { filterRoutes } from '@/utils/tools'
const namespaced = true

const state = {
  acceptRoute: ['Home', 'Login', '404', '403'],
  acceptBtn: ['delete', 'edit'],
  asyncRouter: []
}

const actions = {
  GET_ROUTES ({ commit }) {
    commit('GET_ROUTES_SUCCESS', ['SysPassword', 'SysPermit'])
  },
  GET_ASYNC_ROUTE ({ commit }) {
    commit('GET_ASYNC_SUCCESS', filterRoutes(menuList))
  }
}

const mutations = {
  GET_ROUTES_SUCCESS (state, data) {
    state.acceptRoute = [...state.acceptRoute, ...data]
  },
  GET_ASYNC_SUCCESS (state, data) {
    state.asyncRouter = data
  }
}

export default {
  state, actions, mutations, namespaced
}
