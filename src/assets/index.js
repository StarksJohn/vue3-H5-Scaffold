
/**
 * how to use,eg :
 * 1: in main.js
 *    import assets from '@/assets/index.js'
 *    app.config.globalProperties.$assets=assets
 *
 2: in your page
 import {
         getCurrentInstance
        } from 'vue'
 setup (props, ctx) {
        const globalProperties = getCurrentInstance()?.appContext.config.globalProperties
        return {
           globalProperties
        }
      }
 <img :src="globalProperties.$assets.homeBackImg0">
 */
export default {
}
