import axios from 'axios'
import nprogress from 'nprogress'

import { Message } from 'element-ui'

import { HOST, HTTP_TIMEOUT } from '@/constants'

// 设置 axios 请求基础地址
axios.defaults.baseURL = HOST
// 设置 axios 请求超时时间
axios.defaults.timeout = HTTP_TIMEOUT
// 设置跨域时允许发送 Cookies
axios.defaults.withCredentials = true

const jwtToken = localStorage.getItem(JWT_TOKEN_KEY)
axios.defaults.headers.common['h5_request'] = true
if (jwtToken) {
  axios.defaults.headers.common['Authorization'] = jwtToken
}

// 忽略的状态码，这些状态码不显示提示消息
const IGNORE_STATUS = {
  // '401': true,
  '600': true,
  '602': true,
  '603': true
}

/**
 * axios 请求拦截器
 * 请求之前开启 nprogress
 */
axios.interceptors.request.use((config) => {
  nprogress.start()
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

/**
 * axios 响应拦截器
 */
service.interceptors.response.use(response => {
  nprogress.done() // 关闭nprogress
  const res = response.data
  return res
}, error => {
  nprogress.done() // 关闭nprogress
  // 状态码判断错误处理
})
