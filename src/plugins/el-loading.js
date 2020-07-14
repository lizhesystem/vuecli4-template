/**
 * @description loading全屏加载样式,在路由拦截器里配置,defaultSettings里控制是否启动
 */
import { Loading } from 'element-ui'
import { loadingConfig } from '@/config/defaultSettings' // 全局的一个基本参数配置

let loading = null
const loadingShow = () => {
  loading = Loading.service(loadingConfig)
}

const loadingHide = () => {
  loading.close()
}

const loadingObj = {
  loadingShow,
  loadingHide
}

export default loadingObj
