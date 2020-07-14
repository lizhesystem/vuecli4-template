/**
 * 全局配置文件
 */
export const GLOBAL_LOADING_DEFAULT_CONFIG = {
  title: '管理平台',
  indexTitle: '环境能源交易所-管理端',
  clientId: 'zhfront', // 客户端id
  clientSecret: 'zhfront_secret', // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  logo: 'S',
  key: 'ylsoft', // 配置主键,目前用于存储
  lockPage: '/lock',
  tokenTime: 6000,
  // http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  // 配置首页不可关闭
  isFirstPage: false
}

// vue-router 默认配置
export const ROUTER_DEFAULT_CONFIG = {
  mode: 'history',
  base: ''
}

// 默认路由
export const DEFAULT_ROUTES = [
  {
    // * 所有未匹配到的路由，重定向到home路由上
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]

// 全局页面跳转是否启用loading加载样式
export const routerLoading = false

// 全局api接口调用是否启用loading
export const apiLoading = false

// 全屏loading加载配置
export const loadingConfig = {
  lock: true,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
}
