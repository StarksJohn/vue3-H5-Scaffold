import {getUserInfoAPI} from '../api/index'

/**
 * import { useStore } from 'vuex'
   * setup (props, ctx) {
      const store = useStore()
      store.dispatch('setToken','')
    }
 * ctx.commit 将会触发 mutations.js 内的方法改变 state 状态
 */
export default {
  /**
   * 模拟请求用户数据
   * @param ctx
   * @param count
   * @returns {Promise<void>}
   */
  async getUserInfo(ctx, count) {
    const user = await getUserInfoAPI();
    ctx.commit("user", {
      user,
    });
  },
  setToken(ctx,payload){
    console.log('actions.js setToken payload=',payload)
    ctx.commit("token", {
      token:payload,
    });
  },
};
