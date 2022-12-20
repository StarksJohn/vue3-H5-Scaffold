/**
 * import { } from '@/api'
 * @returns {Promise<unknown>}
 */
import { get, post } from 'axios-tools'
import { tool, vueTools } from 'starkfrontendtools'
import urls from './urls'
import router from '@/router'
import { Toast } from 'vant'
import store from '@/store'
import axios from '@/utils/axios'
import { getCurrentInstance,inject } from 'vue'


//模拟请求
export const getUserInfoAPI = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name:'userName' })
    }, 3000)
  })
}

const headers = () => {
  return {
    'Authorization': `${sessionStorage.getItem('token') || null}`,
    post:{
      'Content-Type':'application/json'
    }
  }
}

const baseURL=process.env.NODE_ENV == 'development' ? '/api' : '//47.99.134.126:7008/api'

const processCode = (data) => {
  console.log('processCode data=', data)
  if (data.code !== 0) {
    if (data.code === 401) {
      console.log('processCode 401 router=',router)
      store.dispatch('setToken', null).then()
    } else if(data.msg){
      Toast.fail(data.msg)
    }
    return false
  } else {
    return true
  }
}

const processErr = (err) => {
  console.log('processErr err=', err)
  if (err.status === 401) {
    store.dispatch('setToken', null).then()
  }
  return Promise.reject(undefined)
}

export const login = async (params) => {
  const globalProperties = getCurrentInstance()?.appContext.config.globalProperties
  console.log('api login globalProperties=',globalProperties)//undefined
  // 获取全局对象
  const global = inject('global')
  console.log('api login global=',global)//undefined
  console.log('api login $fakedata=',$fakedata)

  const [err, data] = await tool.to(axios.post('/user/login', params))
  // const [err, data] = await tool.to(post({ url: urls.login, params, baseURL, headers:headers() }))
  console.log('login data=', data)
  console.log('login err=', err)
  if (data && processCode(data) && !err) {
    return Promise.resolve(data.data)
  } else {
    return processErr(err)
  }
}
