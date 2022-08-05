import {getUserInfoAPI} from '../api/index'

/**
 * ctx.commit 将会触发 mutations.js 内的方法改变 state 状态
 */
export default {
  add(ctx, count) {
    ctx.commit("add", {
      count,
    });
  },
  min(ctx, count) {
    ctx.commit("min", {
      count,
    });
  },
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
};
