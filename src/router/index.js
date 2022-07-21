import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHashHistory ,createWebHistory/*history 模式*/} from 'vue-router'
import Home from '../views/Home.vue'

/**
 * createRouter 创建路由实例
 * use: 在 setup函数或者use函数中可用 const router = useRouter(), 在其他地方则只能用 此文件的实例,也就是 import router from '@/router'
 * @type {Router}
 */
const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/data',
      name: 'Data',
      component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
    }
  ]
})

export default router
