// import router from '@/router'

const initTabs = [{ name: '首页', path: '/' }]
const convertParam = ({ name, meta, path }) => {
  return { pathname: name, name: meta.name || name, path }
}

const namespaced = true
const state = {
  tabs: [...initTabs]
}

const actions = {
  ADD ({ commit }, params) {
    commit('ADD_SUCCESS', convertParam(params))
  },
  CLOSE ({ commit }, params) {
    if (params.all) {
      commit('RESET_SUCCESS')
    } else if (params.other) {
      commit('CLOSE_OTHER_SUCCESS', params)
    } else {
      commit('CLOSE_SUCCESS', params)
    }
  }
}

const mutations = {
  ADD_SUCCESS (state, params) {
    let i = state.tabs.findIndex(i => i.name === params.name)
    if (i === -1) {
      state.tabs.push(params)
    } else if (state.tabs[i].path !== params.path) {
      state.tabs[i] = [...params]
    }
  },
  CLOSE_SUCCESS (state, params) {
    let i = state.tabs.findIndex(i => i.name === params.name)
    if (i > -1) {
      state.tabs.splice(i, 1)
    }
  },
  RESET_SUCCESS (state) {
    // state.tabs = [...initTabs]
    // router.replace({ path: '/' })
  },
  CLOSE_OTHER_SUCCESS (state, { other, ...rest }) {
    // state.tabs = [rest]
  }
}

export default {
  state, actions, mutations, namespaced
}
