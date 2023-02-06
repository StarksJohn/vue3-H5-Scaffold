import { createRouter, createWebHashHistory, createWebHistory/*history 模式*/ } from 'vue-router'
import Home from '../views/Home.vue'
import state from '@/store/state'

export const routerPath = state.routerPath
import store from '@/store'

/**
 * createRouter 创建路由实例
 * use:
 *  1 在 setup() 外使用时, 用 import router from '@/router'
 *  2 在 setup() 内使用时, 用 import { useRouter } from 'vue-router'
 *    setup (props, ctx) {
           const router = useRouter()
        }
 * @type {Router}
 */
const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: routerPath.home
    },
    {
      path: routerPath.home,//路由指向的 URL 路径
      name: 'Home',//路由指向这个页面时使用的名字
      component: Home, meta: { requiresAuth: true }//路由调用此页面时，要加载的组件
    },
    {
      path: routerPath.data,
      name: 'Data',
      component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue')
    },
    {
      path: routerPath.user,
      name: 'User',
      component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
    },
    {
      path: routerPath.login,
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'), meta: { requiresAuth: false }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
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
    },
    {
      path: '/vue3JScodeTemp',
      name: 'vue3JScodeTemp',
      component: () => import(/* webpackChunkName: "account" */ '../vue3JScodeTemp.vue')
    }
  ]
})

/**
 * 全局守卫
 */
router.beforeEach((to, from, next) => {
  console.log('router.beforeEach from=', from)
  console.log('router.beforeEach to=', to)
  console.log('router.beforeEach store=', store)
  console.log('router.beforeEach state=', state)
  if (to.meta.requiresAuth && !sessionStorage.getItem('token')) {// 此路由需要授权，请检查是否已登录;
    //https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
    console.log('router beforeEach 未登录,重定向到登录页面')
    // {
    //   router.replace({ path: routerPath.login, query: { redirect: to.fullPath } })
    //   return false //  不要 return false,否则 控制台里报错  Error: Invalid navigation guard
    // }
    next({
      path: routerPath.login,
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    })
  } else {
    next()
  }
})

export default router
