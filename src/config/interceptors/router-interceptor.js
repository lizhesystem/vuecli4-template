/**
 *  route拦截器
 */
import store from '../../store/store.js'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
import loadingObj from '@/plugins/el-loading'
import { routerLoading } from '@/config/defaultSettings'

NProgress.configure({
  showSpinner: false
})

const whiteList = ['login', 'register'] // no redirect whitelist
const loginRoute = '/login'

export function routerBeforeEachFn(to, from, next) {
  if (to.matched.length === 0 && to.fullPath.indexOf('?sec') === -1) {
    next(to.path + '?sec')
    window.location.reload()
  } else {
    NProgress.start()
    // 全屏loading,根据defaultSettings里的配置是否启用
    routerLoading && loadingObj.loadingShow()
    if (getToken()) {
      if (to.path === loginRoute) {
        next({
          path: '/',
          query: { redirect: from.path }
        })
      } else {
        // 如果用户信息为空则获取用户信息，获取用户信息失败，跳转到登录页
        if (store.getters.token.length === 0) {
          store.dispatch('FedLogOut').then(() => {
            next({
              path: loginRoute,
              query: { redirect: to.path }
            })
          })
        } else {
          next()
        }
      }
    } else {
      // 在免登录白名单，直接进入
      if (whiteList.includes(to.name)) {
        next()
      } else {
        // 判断是否需要认证，没有登录访问去登录页
        next({
          path: loginRoute,
          query: { redirect: to.path }
        })
      }
    }
  }
}

export function routerAfterEachFn() {
  NProgress.done()
  // 如果在组件中使用this.$nextTick异步关闭
  routerLoading && setTimeout(() => {
    loadingObj.loadingHide()
  }, 0)
}
