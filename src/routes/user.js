/**
 * @description 登录
 */

const User = () => import('@/views/User/Login')
const Register = () => import('@/views/User/Register')

export default [
  {
    path: '/login',
    name: 'login',
    component: User,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: '注册'
    }
  }
]
