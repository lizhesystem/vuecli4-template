import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router-instance'
import store from './store/store'
import i18n from './locales'

// * ----------------------------------------
// * 导入插件
// * ----------------------------------------
import './plugins/component-register'
import './plugins/base-component-register'
import { vueInjecter } from '@/plugins/injecter'
import { directiveRegister, filterRegister } from '@/plugins/register'

// * ----------------------------------------
// * 调用filters、directives注册器
// * ----------------------------------------
filterRegister()
directiveRegister()

// * ----------------------------------------
// * 调用全局注入器
// * ----------------------------------------
vueInjecter()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
