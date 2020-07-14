/**
 *  axios拦截器
 */
import axios from 'axios'
import store from '@/store/store'
import router from '@/plugins/router-instance'
import { serialize } from '@/utils/util'
import { getToken } from '@/utils/auth'
import { getStore } from '@/utils/store'
import { Message } from 'element-ui'
import { GLOBAL_LOADING_DEFAULT_CONFIG } from '@/config/defaultSettings'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Base64 } from 'js-base64'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000,
  withCredentials: true,
  validateStatus: status => {
    return status >= 200 && status <= 500 // 默认的返回码
  }
})
// 加载条
NProgress.configure({
  showSpinner: false
})

// HTTPRequest拦截
request.interceptors.request.use(config => {
  NProgress.start()
  const Token = getToken()
  config.headers.Authorization = `Basic ${Base64.encode(`${GLOBAL_LOADING_DEFAULT_CONFIG.clientId}:${GLOBAL_LOADING_DEFAULT_CONFIG.clientSecret}`)}`
  if (Token) {
    config.headers['zdservercore-locale'] = getStore({ name: 'language' }) || 'zh'
    config.headers['zdservercore-auth'] = 'bearer ' + getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  }
  // headers中配置serialize为true开启序列化
  if (config.method === 'post') {
    config.data = serialize(config.data)
  }
  if (config.url.indexOf('qiniu') !== -1) {
    config.withCredentials = false
  }
  return config
}, error => {
  return Promise.reject(error)
})

// HTTPResponse拦截
request.interceptors.response.use(res => {
  NProgress.done()
  const status = res.data.code || 200
  const statusWhiteList = GLOBAL_LOADING_DEFAULT_CONFIG.statusWhiteList || []
  const message = res.data.msg || '未知错误'
  // 如果在白名单里则自行catch逻辑处理
  if (statusWhiteList.includes(status)) return Promise.reject(res)
  // 如果是401则跳转到登录页面
  if (status === 401) store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }))
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
    Message({
      message: message,
      type: 'error'
    })
    return Promise.reject(new Error(message))
  }
  return res
}, error => {
  NProgress.done()
  return Promise.reject(new Error(error))
})

export default axios
