module.exports = {
  root: true,
  env: {
    node: true
  },
  // vue eslit检查规则 使用strongly-recommended强烈推荐的风格
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  /**
   * 自定义规则
   * http://eslint.cn/docs/user-guide/configuring#configuring-rules
   * 【】基本使用方式
   *  "off" 或者0 关闭规则
   *  "warn" 或者1 将规则打开为警告（不影响退出代码）
   *  "error" 或者2 将规则打开为错误（触发时退出代码为1）
   *  如：'no-restricted-syntax': 0, // 表示关闭该规则
   * 【】如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
   *  如 'semi': ['error', 'never'], never就是额外的配置项
   */
  rules: {
    // 在类成员之间出现空行
    'lines-between-class-members': 'warn',
    // 强制驼峰
    camelcase: 0,
    // 文件最后换行
    'eol-last': 0,
    // 空格、空行 警告！
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-mixed-spaces-and-tabs' : 'warn',
    // 关闭attribute强制横线连接
    'vue/attribute-hyphenation': 'off',
    // 单行内容的html标签，将内容置于一行中
    'vue/singleline-html-element-content-newline': 'off',
    // style、template、script块间留有空格
    'vue/padding-line-between-blocks': 'warn',
    // 允许使用v-html
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 更多参考：https://eslint.vuejs.org/rules/  根据项目组约定更改
    // 自我关闭风格
    'vue/html-self-closing': 0,
    // 对模板中的组件命名样式强制使用特定的大小写
    'vue/component-name-in-template-casing': 0,
    // 标签右括号之前需要或不允许有空格
    'vue/html-closing-bracket-spacing': 0,
    // 组件里有没有使用的组件
    'vue/no-unused-components': 'warn',
    // html多元素换行
    'vue/multiline-html-element-content-newline': 0,
    // 禁止在与v-for相同的元素上使用v-if
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    // 使用单引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      2,
      'never',
      {
        beforeStatementContinuationChars: 'never'
      }
    ],
    // 设置缩进
    indent: 'off',
    // 关闭reject必须返回一个error
    'prefer-promise-reject-errors': 'off',
    // 允许同一个var声明多个变量
    'one-var': 'off',
    // 允许使用tab
    'no-tabs': 'off',
    // 允许函数前没有空格
    'space-before-function-paren': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // 允许使用void 0代替undefined
    'no-void': 'off',
    // console、debugger
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  globals: {}
}
