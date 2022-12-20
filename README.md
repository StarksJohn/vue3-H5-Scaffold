vue3+JS 用于 H5 项目的 脚手架

    分支: main  基于 https://github.com/Nick930826/daily-cost (对应 https://www.lanqiao.cn/courses/3097 这个 电子书) , https://github.
    com/newbee-ltd/newbee-mall-vue3-app, https://github.com/kalacloudCode/vue-axios-example ,https://git.cxaone.cn/Stark/zhongyi 这几个JS项目

项目搭建:  npm  i
        
    1 添加路由 Vue-Router 4.x  https://www.lanqiao.cn/courses/3097/learning/?id=74991  https://www.lanqiao.cn/courses/3097/learning/?id=75150
    2 添加 Vant UI 组件库 https://www.lanqiao.cn/courses/3097/learning/?id=74991 https://www.lanqiao.cn/courses/3097/learning/?id=75150
        1. yarn add vant@3.x -S.  
        2. 添加按需引入的插件 yarn add babel-plugin-import -D
        3. 在项目根目录添加 babel.config.js
    3 移动端 rem 适配 https://www.lanqiao.cn/courses/3097/learning/?id=74991  https://www.lanqiao.cn/courses/3097/learning/?id=75150
        1. 推荐使用以下两个工具：
        2. postcss-pxtorem 是一款 postcss 插件，用于在编译的时候对 px 单位转换为 rem 单位时使用
        3. lib-flexible 用于设置 rem 基准值, 是网页做 html 的 font-size 适配用的
        4. yarn add lib-flexible -S         yarn add postcss-pxtorem -D
        5. 在 main.js 引入 lib-flexible
        6. 不需要 px 转 rem 的情况，可以使用大写的 PX 作为单位
    4 添加 iconfont 文字图标库 https://www.lanqiao.cn/courses/3097/learning/?id=74991  https://www.lanqiao.cn/courses/3097/learning/?id=75150 ,如图 https://hsbc-wsmp-static.cxaone.cn/394CD3B0-7FAC-45EF-828F-89A38FFA59B7.png
    5 引入 moment https://wenku.baidu.com/view/b37807d0b90d4a7302768e9951e79b89680268ef.html
    6 添加 CSS 预处理器 Less https://www.lanqiao.cn/courses/3097/learning/?id=74991   https://www.lanqiao.cn/courses/3097/learning/?id=75150
    7 添加 less-tool , 借鉴 CXA健康活动相关项目 笔记里的 相关项目代码
    8 add  .env.xxx 文件
    9 解决浏览器缓存的坑: https://blog.csdn.net/qq_39041201/article/details/123209761

uat: 账号密码: admin  111111
    
    1. Debug: nvm use 14  && yarn serve:uat
    2. Release: 已部署到 薄荷授权 项目的vue3分支  https://uat-boheauth.cxaone.cn

Depoly: 

    已部署到 薄荷授权项目 boheAuth  的 vue3分支对应的uat 环境
    坑:
        1:打包时报错:Can't resolve './@vant/icons/src/encode-woff2.less' in '/home/jenkins/agent/workspace/Deploy-New/node_modules/_vant@3.5.4@vant/es/icon’  ;  具体 Log  在 http://47.101.134.19/view/7.%E5%8F%91%E5%B8%83/job/Deploy-New/458/console 
            解决: 借鉴 https://github.com/vant-ui/vant/issues/9570, vant 可以用最新的 "vant": "^3.6.1”, 同时 安装  "less": "^4.1.3”,和 "less-loader": "^7.0.0” 这2个指定版本
        2:http://47.101.134.19/view/7.%E5%8F%91%E5%B8%83/job/Deploy-New/463/console ,如图 https://hsbc-wsmp-static.cxaone.cn/9B3AAA10-E9D0-4087-9C42-FE2A347C8535.png
            解: 改 首页的页面名字为 HomePage
    部署到阿里云 : https://www.lanqiao.cn/courses/3097/learning/?id=75499  Vite 创建的项目，开发一时爽，部署火葬场, 把 vite项目切成 Vue CLI 项目

代码提交(开梯子):  
    
    git commit -a -s -m 'add' && git push origin main

