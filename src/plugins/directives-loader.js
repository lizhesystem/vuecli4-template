/**
 * @description 指令加载器，读取Directives目录下所有文件，并生成对应map
 */

export default function directivesLoader(defaultDirectives = []) {
  let directives = [].concat(defaultDirectives)

  // 导入Directives目录下所有非index.js的文件
  const files = require.context('../directives', false, /^(?!\.\/index\b).*\.js$/)

  const reg = /([\w-]+)\.js$/ // 截取name

  files.keys().forEach(key => {
    const file = files(key)

    directives = directives.concat({
      name: key.match(reg)[1],
      directive: file.default
    })
  })

  return directives
}
