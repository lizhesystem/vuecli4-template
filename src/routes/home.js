/**
 * @description 首页
 */

/* Layout */
import Layout from '@/views/Layout/Layout'
// 首页
const Home = () => import(/* webpackChunkName: "home" */'@/views/Home')
const child = () => import(/* webpackChunkName: "home" */'@/views/Home/HomeChild/Child1')
const child1 = () => import(/* webpackChunkName: "home" */'@/views/Home/HomeChild/Child2')

export default [
  {
    path: '',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        },
        children: [
          {
            path: '/home/child',
            name: 'child',
            component: child
          },
          {
            path: '/home/child1',
            name: 'child1',
            component: child1
          }
        ]
      }
    ]
  }
]
