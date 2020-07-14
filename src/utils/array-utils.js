/**
 * 数组转换为字符串
 */
export const arrayToStr = (params) => {
	if (typeof (params) === 'object') {
    let resultStr = ''
    params.forEach(ele => {
      resultStr = resultStr + ele + ','
    })
    if (resultStr.length > 1) {
      return resultStr.substring(0, resultStr.length - 1)
    } else {
      return resultStr
    }
	}
}

/**
 * 字符串转换为数组
 */
export const strToArray = (params) => {
  if (params != null && params.indexOf(',') > -1) {
    return params.split(',')
  }
  return params
}
