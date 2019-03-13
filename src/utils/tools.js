import axios from 'axios'
import store from '@/store'
/**
 * 检查是否已登录
 *
 * @param {* Vue Store Instance} store
 */
export function isAuthenticated (store) {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

/**
   * 日期格式化，将 Date 转化为指定格式的String
   * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   * 例子：
   * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
   * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
   */
export function dateFormat (date, fmt = 'yyyy/MM/dd') {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

export function arrRemoveDuplicates (arr) {
  return Array.from(new Set(arr))
}

/**
 * 应用新的 Token, 先保存到 localStorage, 然后设置 axios 默认头部
 *
 * @param {*JWT Token} token
 */
export function applyToken (token) {
  if (token) {
    localStorage.setItem('BUFF_TOKEN_KEY', token)
    axios.defaults.headers.common['authorization'] = token
  }
}

/**
 *
 * 测试用
 *
 */
export function getInfo () {
  return new Promise((resolve, reject) => {
    if (store.userinfo) {
      resolve(store.userinfo)
    } else if (sessionStorage.getItem('MY_JWT')) {
      resolve(sessionStorage.getItem('MY_JWT'))
    } else {
      console.warn('请登录')
      reject(new Error('请登录'))
    }
  })
}
