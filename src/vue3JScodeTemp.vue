<template>
  <!--  <div>{{ count }} {{ _count }} {{ data }}</div>-->
  <!--  <p>{{ text }}</p>-->
  <!--  <p>{{ $route.query.count }}</p>-->
  <div>
    <button @click="min">-</button>
    <span>购物车</span>
    <button @click="add">+</button>
    <p>购物车数量：{{ vuexState.count }}</p>
    <button @click="getUserInfo">getUserInfo</button>
    <p>userName：{{ vuexState.user.name }}</p>
  </div>

</template>

<script>
import {
  ref, reactive, toRefs, onBeforeMount, onMounted, watch, isRef, computed, readonly, watchEffect
  , onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, provide, inject
}
  from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'vue3JScodeTemp',
  components: {},
  props: {
    count: Number,
  },
  //子组件接收的方法，需要通过 emits 在 options 中注册，否则会报警告,通过上下文 ctx.emit 触发传进来的方法以及返回相应的回调参数
  emits: [''],
  /**
   *
   * @param props: 注意props 不要进行解构，如 setup(...props)，这样会让 props 失去响应式
   * @param ctx
   */
  setup (props, ctx) {
    console.log('vue3JScodeTemp setup props=', props)
    const router = useRouter()
    //页面传参,query里的数据会拼接在 页面 Url 的 ? 右边, 如
    router.push({ path: '', query: { count: 2 } })
    //拿页面参数, 也可以在 template 模板内通过 $route.query.count 拿到传进来的变量
    const query = { router }//{count:2}
    // 监听 路由变化 https://www.jianshu.com/p/43fc79326ed5?u_atoken=4a1f3dfc-b8d6-495a-8b63-cfe269e47d88&u_asession=01B6S5mMsaeKUobsnoSFdRAclHm4YJ-tW93kQ0WwWKOt77lOU6MsNmuIBXgUIEwBHNX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K-t8cd60japZfGt3jyXCEtYPMqDvQo0pEVbhSjSW3HVJmBkFo3NEHBv0PZUm6pbxQU&u_asig=05MRojxUtFitnx0CfWEL58QQgjkIbT6hwM8VKDRF5FWi2lk2THB-wMGA5H66Ll5SI9fEoad6GmCFfw_Hl3abFpU6K-yJoLkrFALDvQKs4Q0x4X70-Ft4x3QDHUy4SnmBj4LuUaYOIp2ps9-iuy7tnRnE--AYTWZ8kcq56Avi_RjwL9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzZBmKtiG05ZnSnjhlAP8HzgG6IB_IveBcwXRvuwEYulJOF33MttdlYrQH7V14NMYIe3h9VXwMyh6PgyDIVSG1W_X8NC7rNX2rzQFvD-pPhBZH7tx7E3bKmsnQi7JCMY42wu9Ll_nIZbkS4-f21ivAoTq5gWEbWaPiBJ8MbhLTPEhmWspDxyAEEo4kbsryBKb9Q&u_aref=NzqE5sCT3TaTH1v6JZDOyplxWTQ%3D
    const { currentRoute } = useRouter()
    console.log('app.vue currentRoute=', currentRoute)
    watch(() => currentRoute.value, (param) => {
      console.log('app.vue 监听 currentRoute=', param)
    })

    const store = useStore()
    const vuexState = store.state
    const add = () => {
      store.dispatch('add', 1)
    }
    const min = () => {
      store.dispatch('min', 1)
    }
    const getUserInfo = () => {
      store.dispatch('getUserInfo')
    }

    const _count = ref(0)
    //变量是否为 ref 类型
    console.log(isRef(_count)) // true
    const state = reactive({ data: '1', msg: '2' })
    //创建一个只读的数据，并且所有的内容都是只读，不可修改
    const readonlyState = readonly({
      name: '陈尼克',
      desc: '你好',
    })
    ctx.emit('', null)
    const text = computed(() => {
      return state.data + state.msg
    })
    // 返回停止函数stop
    const stop = watchEffect((onInvalidate) => {
      //清除副作用,在 watchEffect 监听的变量改变之前被调用一次
      onInvalidate(() => {
        console.log('执行 onInvalidate')
      })
      console.log(`监听state.data=${state.data}`)
    })
    watch(
        () => {
          return state.data
        },
        (nextData, preData) => {
        }
    )
    //https://www.lanqiao.cn/courses/3097/learning/?id=74996  provide/inject，便可以在“祖先”组件声明 provide，然后在“儿子”组件通过 const info = inject("info"); 拿到数据,但是 不推荐使用,因为 在 Son.vue 组件中，你可以直接修改 inject 传进来的 name 值。但是你细想，数据源存在于 App.vue 中，你在 Son.vue 中私自修改了数据源传进来的值，那两边的值就会产生紊乱，上述业务逻辑属于简单的，当你在公司正式项目中这样做的时候，数据源就会变得杂乱无章，页面组件变得难以维护。综上所述，一定要控制好数据源，保持单一数据流。
    provide('info', {
      work: '前端开发',
      age: '18',
    }) // 多个声明形式
    /**
     * 组件挂载页面之前执行,页面渲染前执行
     */
    onBeforeMount(() => {
    })
    /**
     * 组件挂载到页面之后执行,请求数据
     */
    onMounted(async () => {
      // const data = await serviceApi(params);
    })
    onBeforeUpdate(() => {
    })
    onUpdated(() => {
    })
    onBeforeUnmount(() => {
      stop()
    })
    onUnmounted(() => {
    })
    onErrorCaptured(() => {
    })
    return {
      ...toRefs(state), _count, text, ...toRefs(readonlyState), add, min, vuexState,getUserInfo
    }
  },
}
</script>

<style scoped lang='less'>
</style>
