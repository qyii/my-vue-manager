// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import * as directives from '@/utils/directives'

import MyIcon from '@/components/myIcon'
import { registerTool } from '@/utils/tools'

import './app.scss'
import '@/icons'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.component('my-icon', MyIcon)

// 注册 Vue Directives
registerTool('directive', directives)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
