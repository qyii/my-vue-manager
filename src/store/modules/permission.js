// import axios from 'axios'
import menuList from '@/mock/menulist'
import { filterRoutes } from '@/utils/tools'
const namespaced = true

const state = {
  acceptBtn: ['delete', 'edit'],
  asyncRouter: []
}

const actions = {
  GET_ASYNC_ROUTE ({ commit }) {
    commit('GET_ASYNC_SUCCESS', filterRoutes(menuList))
  }
}

const mutations = {
  GET_ASYNC_SUCCESS (state, data) {
    state.asyncRouter = data
  }
}

export default {
  state, actions, mutations, namespaced
}
