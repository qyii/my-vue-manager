import store from '@/store'
import { LOGIN_PAGE_PATH } from '@/constants'

export default function (to, from, next) {
  isAuthenticated().then(() => {
    if (to.path !== LOGIN_PAGE_PATH) {
      doNext(to, next)
    } else {
      next({
        path: '/'
      })
    }
  }).catch(_ => {
    if (to.path !== LOGIN_PAGE_PATH) {
      next({
        path: LOGIN_PAGE_PATH,
        query: { redirect: to.fullPath }
      })
    } else {
      doNext(to, next)
    }
  })
}

function doNext (to, next) {
  store.dispatch('ON_CHANGE_ROUTE', to)
  next()
}

/**
 * 检查是否已登录
 *
 * @param {* Vue Store Instance} store
 */
function isAuthenticated () {
  return new Promise((resolve, reject) => {
    if (store.state.userinfo !== null) {
      resolve()
    } else {
      store.dispatch('USERINFO').then(() => {
        resolve()
      }).catch((err) => {
        reject(err)
      })
    }
  })
}
