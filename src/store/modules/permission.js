// import axios from 'axios'
const namespaced = true

const state = {
  acceptRoute: ['Home', 'Login', '404', '403'],
  acceptBtn: ['delete', 'edit']
}

const actions = {
  GET_ROUTES ({ commit }) {
    commit('GET_ROUTES_SUCCESS', ['SysPassword', 'SysPermit'])
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
