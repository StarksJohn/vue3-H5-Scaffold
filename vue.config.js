/**
 * https://blog.csdn.net/q1ngqingsky/article/details/119671083
 * vue-cli3 打包防止浏览器缓存
 * @type {number}
 */
const TimeStamp  = new Date().getTime();

module.exports = {
  productionSourceMap: false,
  // 解决实验楼环境启动的 https，服务端接口是 http 造成跨域的问题。
  devServer: {
    proxy: {
      '/api': {
          target: "http://47.99.134.126:7008",  // 配置到服务器后端的API头部
          pathRewrite: {
              '^/api': '/api'  // 路径重写，第一个与上面相同，第二个/queue-admin 为server.context-path（服务器的上下文）
          },
          // 以下解决https 访问问题。上面的可以访问http
          changeOrigin: true,
          secure: false
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [ './node_modules/less-tool/*.less' ]
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: `js/[name].${TimeStamp}.js`,
      chunkFilename: `js/[name].${TimeStamp}.js`
    },
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: {
      // 修改打包后css文件名 ,css打包文件，添加时间戳
      filename: `css/[name].${TimeStamp}.css`,
      chunkFilename: `css/[name].${TimeStamp}.css`
    }
  }
}
