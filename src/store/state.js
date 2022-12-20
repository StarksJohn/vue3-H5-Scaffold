/**
 * use:
 *    import { useStore } from 'vuex'
     setup() {
                  const store = useStore()
                  const vuexState = store.state
                  return {
                    vuexState
                  }
          }

 或
    import state from '@/store/state' ,建议用 这种方式直接拿 state 对象, 因为 上边的方式里, vuexState 不一定是最新的数据
 */
export default {
  count: 0,user: { name:'' },
  routerPath: {
    home: '/home',data:'/data',user:'/user',login: '/login',
  },
  token: sessionStorage.getItem('token')||'',
};
