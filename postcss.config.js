/*
https://www.lanqiao.cn/courses/3097/learning/?id=74991
为 px 单位转 rem 单位做配置
// 用 vite 创建项目，配置 postcss 需要使用 post.style.js，之前使用的 .postcssrc.js 已经被抛弃
// 具体配置可以去 postcss-pxtorem 仓库看看文档
 */
module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
