/**
 * @description 国际化初始化
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './lang/en-US'
import zhLocale from './lang/zh-CN'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import { getStore } from '@/utils/store'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}
const i18n = new VueI18n({
  locale: getStore({ name: 'language' }) || 'zh',
  messages,
  silentTranslationWarn: true
})

export default i18n
