/**
 * @description 全局组件注册器
 */
import Vue from 'vue'

// base library
import ZdSvgIcon from '@/base/ZdSvgIcon'
import ZdTransitionSlide from '@/base/ZdTransitionSlide'

Vue.component(ZdTransitionSlide.name, ZdTransitionSlide)
Vue.component(ZdSvgIcon.name, ZdSvgIcon)

// svg library
const req = require.context('@/assets/svgs', false, /\.svg$/)
req.keys().map(req)
