const initTabs = [{ name: '首页', path: '/home' }]
const convertParam = ({ name, meta, path }) => {
  return { pathname: name, name: meta.name || name, path }
}

const namespaced = true
const state = {
  tabs: [...initTabs],
  visible: false // 右键自定义菜单可见状态
}

const actions = {
  ADD ({ commit }, params) {
    commit('ADD_SUCCESS', convertParam(params))
  },
  CLOSE ({ commit }, params) {
    if (!params) {
      commit('HIDE_SUCCESS')
    }
    if (params.all) {
      commit('RESET_SUCCESS')
    } else if (params.other) {
      commit('CLOSE_OTHER_SUCCESS', params)
    } else {
      commit('CLOSE_SUCCESS', params)
    }
  },
  OPEN ({ commit }) {
    commit('OPEN_SUCCESS')
  }
}

const mutations = {
  ADD_SUCCESS (state, params) {
    state.visible = false
    let i = state.tabs.findIndex(i => i.name === params.name)
    if (i === -1) {
      state.tabs.push(params)
    } else if (state.tabs[i].path !== params.path) {
      state.tabs[i] = [...params]
    }
  },
  OPEN_SUCCESS (state) {
    state.visible = true
  },
  HIDE_SUCCESS (state) {
    state.visible = false
  },
  CLOSE_SUCCESS (state, params) {
    state.visible = false
    let i = state.tabs.findIndex(i => i.name === params.name)
    if (i > -1) {
      state.tabs.splice(i, 1)
    }
  },
  RESET_SUCCESS (state) {
    state.visible = false
    state.tabs = [...initTabs]
  },
  CLOSE_OTHER_SUCCESS (state, { other, ...rest }) {
    mutations.RESET_SUCCESS(state)
    mutations.ADD_SUCCESS(state, rest)
  }
}

export default {
  state, actions, mutations, namespaced
}
