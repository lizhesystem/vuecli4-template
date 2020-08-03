/**
 *  缓存页面新闻广告
 */
import { getAdvList, getFooterByCode } from 'Api/home'

export default {
  state: {
    footer: {}, // footer底部
    midAdvSmall: [], // 3个新人专享
    midAdvBig: [] // 4个横屏广告
  },
  mutations: {
    SET_FOOTER: (state, footerInfo) => {
      state.footer = footerInfo
    },
    SET_MIDADVSMALL: (state, midAdvSmall) => {
      state.midAdvSmall = midAdvSmall
    },
    SET_MIDADVBIG: (state, midAdvBig) => {
      state.midAdvBig = midAdvBig
    }
  },
  actions: {
    // 根据页面编码获取底部页面代码
    getFooterInfo({ commit }, code) {
      return new Promise((resolve, reject) => {
        getFooterByCode(code).then(res => {
          const footerInfo = res.data.data
          commit('SET_FOOTER', footerInfo)
          resolve(footerInfo)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取3个新人专享
    getMidAdvSmall({ commit }) {
      return new Promise((resolve, reject) => {
        getAdvList(3).then(res => {
          const ad = res.data.data
          commit('SET_MIDADVSMALL', ad)
          resolve(ad)
        }).catch(error => {
          resolve(error)
        })
      })
    },
    // 获取4个横屏广告
    getBigAdvertising({ commit }) {
      return new Promise((resolve, reject) => {
        getAdvList(2).then(res => {
          const ad = res.data.data
          commit('SET_MIDADVBIG', ad)
          resolve(ad)
        }).catch(error => {
          resolve(error)
        })
      })
    }
  }
}
