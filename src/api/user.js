import request from '@/config/interceptors/axios-interceptor'

const api = {
  Buttons: 'zdservercore-system/menu/buttons',
  UserInfo: 'user/getUserInfo',
  loginByUsername: '/xx/xx/xx',
  logout: 'xx/xx',
  refeshToken: 'xxx/xxx'
}

export const getButtons = () => request({
  url: api.Buttons,
  method: 'get'
})

export const loginByUsername = (parameter) => request({
  url: api.UserInfo,
  method: 'get',
  params: parameter
})

export const logout = (parameter) => request({
  url: api.UserInfo,
  method: 'get',
  params: parameter
})
export const refeshToken = (parameter) => request({
  url: api.UserInfo,
  method: 'get',
  params: parameter
})
export const getUserInfo = (parameter) => request({
  url: api.UserInfo,
  method: 'get',
  params: parameter
})

export const getUser = (parameter) => request({
  url: api.UserInfo,
  method: 'get',
  params: parameter
})
