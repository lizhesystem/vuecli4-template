module.exports = {
  extends: ["alloy", "alloy/vue"],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // "off" 或 0 - 关闭规则
    // warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    "no-param-reassign": 0,
    "vue/component-tags-order": 0
  }
};
