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

// 创建实例
const app = createApp(App)

//
/*
在Vue.prototype上绑定 全局过滤器
use:
  1: 在 <template> 里 直接 用 {{ $filters.transDay(date) }}
  2: 在 setup 方法里,
    const globalProperties = getCurrentInstance()?.appContext.config.globalProperties
    console.log(globalProperties?.$filter.bar())
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
 * use:  this.$moment
 */
app.config.globalProperties.$moment=moment
/**
 * use: this.$fakedata
 * @type {boolean}
 */
app.config.globalProperties.$fakedata=false

app.use(router)
useVant(app)
app.use(store);

app.mount('#app')
