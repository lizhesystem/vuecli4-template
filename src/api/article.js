import request from '@/config/interceptors/axios-interceptor'

const api = {
  articleById: '/zdservercore-ims/zdservercoreImsNews/getById/',
  articleList: '/zdservercore-ims/zdservercoreImsNews/getCommonPages'
}

// 根据code获取页面代码
export const getArticleById = (code) => request({
  url: api.articleById + `${code}`,
  method: 'get'
})
// 获取新闻列表
export const getList = (current, size, params) => {
  return request({
    url: api.articleList,
    method: 'get',
    params: {
      ...params,
      current,
      size
    }
  })
}
