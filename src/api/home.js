import request from '@/config/interceptors/axios-interceptor'

const api = {
  pageCodeUrl: '/zdservercore-ims-common/zdservercoreFimPagecode/getOneByCode/',
  AdvList: '/zdservercore-ims/zdservercoreImsAdvertisement/getADMList/'
}

// 根据code获取页面代码
export const getFooterByCode = (code) => request({
  url: api.pageCodeUrl + `${code}`,
  method: 'get'
})

// 获取横幅广告
export const getAdvList = (code) => {
  return request({
    url: api.AdvList + `${code}`,
    method: 'get'
  })
}
