import { createApp } from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'
// https://www.lanqiao.cn/courses/3097/learning/?id=74991
import 'lib-flexible/flexible'
import router from './router'
import 'vant/lib/index.css'; // 全局引入样式
import './index.css'
import useVant from '@/useVant'
import moment from 'moment'
import store from "./store";
import assets from '@/assets/index.js'
import VConsole from 'vconsole'
if (process.env.NODE_ENV === 'development') {
  new VConsole()
}

// 创建实例
const app = createApp(App)


/*
在Vue.prototype上绑定 全局过滤器
use:
  1: 在 <template> 里 直接 用 {{ $filters.transDay(date) }}
  2: 在 setup 方法里,
    import { getCurrentInstance } from 'vue'
    const globalProperties = getCurrentInstance()?.appContext.config.globalProperties
    console.log(globalProperties?.$filter.bar())
  3 坑: getCurrentInstance 方法 无法再 setup 外部调用到数据,也无法在setup内部定义的方法里调用 ,故 只能把全局变量挂到 window 上
 */
app.config.globalProperties.$filters = {
  transTime(date) {
    return dayjs(Number(date)).format('HH:mm')
  },
  transDay(value) {
    return dayjs(value).format('MM-DD')
  },
  transYDM(value) {
    return dayjs(value).format('YYYY-MM-DD HH:mm')
  }
}
/**
 借鉴 $filters
 */
app.config.globalProperties.$moment=moment
app.config.globalProperties.$assets=assets
/**
 * 配置全局变量 页面中使用 inject 接收
 * 坑: 用 provide + inject 的 全局变量无法再 setup 外部调用到数据,也无法在setup内部定义的方法里调用到数据 ,只能把全局变量挂到 window 上
 */
app.provide('global',{
  'fakedata':true,
})
window.$fakedata=true

app.use(router)
useVant(app)
app.use(store);

app.mount('#app')
