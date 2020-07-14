/**
 * @description 全局注入器 一般需要注入到vue实例的话会用到
 */
import Vue from 'vue'

import { Loading, Message, MessageBox } from 'element-ui'

Vue.use(Loading.directive)

export const vueInjecter = () => {
  const prototypeMethods = {
    install: (Vue, options) => {
      Vue.prototype.$bus = new Vue() // bus实例,兄弟传参用
      Vue.prototype.$loading = Loading.service
      Vue.prototype.$msgbox = MessageBox
      Vue.prototype.$alert = MessageBox.alert
      Vue.prototype.$confirm = MessageBox.confirm
      Vue.prototype.$prompt = MessageBox.prompt
      Vue.prototype.$message = Message
      // 其他注入器...
    }
  }
  Vue.use(prototypeMethods)
}
