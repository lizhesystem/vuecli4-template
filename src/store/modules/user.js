import { setToken, removeToken } from '@/utils/auth'

import { setStore, getStore } from '@/utils/store'

import {
  loginByUsername,
  getUserInfo,
  logout,
  refeshToken,
  getButtons,
  getUser
} from '@/api/user'

const user = {
  state: {
    username: '',
    usercode: '',
    userInfo: getStore({
      name: 'userInfo'
    }) || [],

    permission: getStore({
      name: 'permission'
    }) || {},

    roles: [],

    menu: getStore({
      name: 'menu'
    }) || [],

    menuAll: [],

    token: getStore({
      name: 'token'
    }) || ''
  },
  actions: {
    // 根据用户名登录
    executeLoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo.grantType, userInfo.tenantId, userInfo.username, userInfo.password, userInfo.checkCode)
          .then(res => {
            const data = res.data.data
            commit('SET_TOKEN', data.accessToken)
            // add by wupp 2020年3月26日 11:17:39
            getUser(data.userId).then(response => {
              data.userFlag = response.data.data.userFlag
            }).catch(error => {
              console.error(error)
              reject(error)
            })

            commit('SET_USERIFNO', data)
            // commit('DEL_ALL_TAG');
            // commit('CLEAR_LOCK');
            resolve()
          }).catch(error => {
          console.error(error)
          reject(error)
        })
      })
    },
    GetButtons({ commit }) {
      return new Promise((resolve) => {
        getButtons().then(res => {
          const data = res.data.data
          commit('SET_PERMISSION', data)
          resolve()
        })
      })
    },
    // 根据手机号登录
    LoginByPhone({ commit }, userInfo) {
      return new Promise((resolve) => {
        loginByUsername(userInfo.phone, userInfo.code).then(res => {
          const data = res.data.data
          commit('SET_TOKEN', data)
          // commit('DEL_ALL_TAG');
          // commit('CLEAR_LOCK');
          resolve()
        })
      })
    },
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          const data = res.data.data
          commit('SET_ROLES', data.roles)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 刷新token
    RefeshToken({ state, commit }) {
      return new Promise((resolve, reject) => {
        refeshToken(state.refeshToken).then(res => {
          const data = res.data.data
          commit('SET_TOKEN', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit }) {
      console.log('-->LogOut')
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_USERIFNO', [])
          commit('SET_MENU', [])
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注销session
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_USERIFNO', [])
        commit('SET_MENU', [])
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token
      setStore({
        name: 'token',
        content: state.token,
        type: 'session'
      })
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo
      setStore({
        name: 'userInfo',
        content: state.userInfo
      })
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({
        name: 'menu',
        content: state.menu,
        type: 'session'
      })
    },
    SET_MENU_ALL: (state, menuAll) => {
      state.menuAll = menuAll
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSION: (state, permission) => {
      const result = []

      function getCode(list) {
        list.forEach(ele => {
          if (typeof (ele) === 'object') {
            const chiildren = ele.children
            const code = ele.code
            if (chiildren) {
              getCode(chiildren)
            } else {
              result.push(code)
            }
          }
        })
      }

      getCode(permission)
      state.permission = {}
      result.forEach(ele => {
        state.permission[ele] = true
      })
      setStore({
        name: 'permission',
        content: state.permission,
        type: 'session'
      })
    }
  }

}
export default user
