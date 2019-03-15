// import axios from 'axios'
const namespaced = true

const state = {
  acceptRoute: ['Home', 'Login', '404', '403']
}

const actions = {
  GET_ROUTES ({ commit }, params) {
    commit('GET_ROUTES_SUCCESS', ['SysPassword'])
  }
}

const mutations = {
  GET_ROUTES_SUCCESS (state, data) {
    state.acceptRoute = [...state.acceptRoute, ...data]
  }
}

export default {
  state, actions, mutations, namespaced
}
