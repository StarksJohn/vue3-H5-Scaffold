<template>
<!-- 和 vue-router3 一样，展示路由的组件的地方 -->
  <router-view />
  <NavBar v-if="show" />
</template>

<script>
import NavBar from './components/NavBar.vue';
import { useRouter } from 'vue-router'
import { reactive,onMounted, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
import { tool } from 'starkfrontendtools';
// import vuexState from '@/store/state'

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    const vuexState = useStore().state
    const state = reactive({
      menu: [vuexState.routerPath.home,vuexState.routerPath.data,vuexState.routerPath.user,'/vue3JScodeTemp'],
      show: false
    })
    onMounted(() => {
      // 禁止被手势缩放 https://blog.csdn.net/rxh13543515695/article/details/119798451
     tool.noGestures()
    })
    const router = useRouter()
    router.afterEach((to, from, failure) => {
      console.log('App.vue router.afterEach from=',from)
      console.log('App.vue router.afterEach to=',to)
      console.log('App.vue router.afterEach failure=',failure)

      // menu 内的路径都是需要展示底部导航栏的
      state.show = state.menu.includes(router.currentRoute.value.path)
    })
    // 监听 路由变化
    const { currentRoute } = useRouter()
    console.log('app.vue currentRoute=', currentRoute)
    watch(() => currentRoute.value, (param) => {
      console.log('app.vue 监听 currentRoute=', param)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
