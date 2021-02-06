/**
 * @description 生成路由数组,根据Routes下的路由配置文件生成对应路由数组
 */

export default function routesLoader(defaultRoutes = []) {
  let routes = [].concat(defaultRoutes)

  // 导入Routes目录下所有非index.js的文件
  const files = require.context('@/routes', false, /^(?!\.\/index\b).*\.js$/)

  const keys = files.keys()

  keys.forEach(key => {
    const file = files(key)
    // 将file的default导出模块添加到routes数组中
    routes = routes.concat(file.default)
  })
  console.log(routes)
  return routes
}
