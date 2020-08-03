/**
 * @description 路由实例
 */

import Vue from 'vue'
import Router from 'vue-router'

import routesLoader from './routes-loader'
import { routerAfterEachFn, routerBeforeEachFn } from '@/config/interceptors/router-interceptor.js'
import { ROUTER_DEFAULT_CONFIG, DEFAULT_ROUTES } from '@/config/defaultSettings'

const routes = routesLoader(DEFAULT_ROUTES)

Vue.use(Router)

const router = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 路由切换，让页面滚动到顶部
    return { x: 0, y: 0 }
  }
})

// 加载路由拦截器
router.afterEach(routerAfterEachFn)
router.beforeEach(routerBeforeEachFn)

export default router
