/**
 * @description 字典/Map相关常量
 */

export const newsTypeKey = new Map([
  ['notice', 'SET_NOTICE'],
  ['risk', 'SET_RISK'],
  ['analysis', 'SET_ANALYSIS'],
  ['information', 'SET_INFORMATION'],
  ['policies', 'SET_POLICIES'],
  ['rule', 'SET_RULE'],
  ['case', 'SET_CASE']
])

export const newsTypeRouterKey = new Map([
  ['notice', 'noticeList'],
  ['risk', 'riskList'],
  ['analysis', 'analysisList'],
  ['information', 'information'],
  ['policies', 'policies'],
  ['rule', 'ruleList'],
  ['case', 'caseList']
])

export const sex = [
  {
    label: '男',
    value: '1'
  }, {
    label: '女',
    value: '2'
  }, {
    label: '未知',
    value: '0'
  }
]

export const VAILD = [
  {
    label: '真',
    value: 'true'
  }, {
    label: '假',
    value: 'false'
  }
]
