/**
 * @description 三方组件注册器
 */
import Vue from 'vue'
import ElementLocale from 'element-ui/lib/locale'
import i18n from '../locales'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'

// 全局引入element
Vue.use(ElementUI)

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('@/assets/images/loading.gif')
})

// i18n国际化
ElementLocale.i18n((key, value) => i18n.t(key, value))
