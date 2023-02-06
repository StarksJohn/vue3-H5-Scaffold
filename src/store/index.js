import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

/**
 * import store from '@/store'
 * @type {Store<{count: number, routerPath: {home: string}, landPageRoute: string | null, user: {name: string}, token: string | null}>}
 */
const store = createStore({
  state, // 状态管理
  mutations, // 更改 state 数据，并返回最新的 state
  actions, // dispatch 执行的方法列表
  modules: {},
});

export default store;
