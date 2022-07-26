import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '/api' : '//47.99.134.126:7008/api'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token') || null}`
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  console.log('axios.js router=',router)
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    if (res.data.msg) Toast.fail(res.data.msg)
    if (res.data.code == 401) {
      router.push({ path: '/login' })

    }
    return Promise.reject(res.data)
  }
  return res.data
})
export default axios


//暂时不用 axios-tools ,因会导致死循环请求
// const baseURL = process.env.NODE_ENV == 'development' ? '/api' : '//47.99.134.126:7008/api'
// export default {
//   get: (url, params) => {
//     return get({ url, params, baseURL, headers: {} })
//   },
//   post: (url, params) => {
//     return post({ url, params, baseURL, headers: {} })
//   }
// }
