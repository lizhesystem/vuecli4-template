/**
 * @description directive 和 filters 注册器
 */
import Vue from 'vue'
import directivesLoader from './directives-loader'
import filtersMap from '@/config/filters-map'

// 注入全局的指令
export function directiveRegister() {
  const directives = directivesLoader()
  directives.forEach(({ name, directive }) => Vue.directive(name, directive))
}
// 注入全局的过滤器
export function filterRegister() {
  Object.entries(filtersMap).forEach(([key, value]) => Vue.filter(key, value))
}
