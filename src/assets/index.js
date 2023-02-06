
/**
 * how to use,eg :
 * 1: in main.js
 *    import assets from '@/assets/index.js'
 *    app.style.globalProperties.$assets=assets
 *
 2: in your page
 import {
         getCurrentInstance
        } from 'vue'
 setup (props, ctx) {
        const globalProperties = getCurrentInstance()?.appContext.style.globalProperties
        return {
           globalProperties
        }
      }
 <img :src="globalProperties.$assets.homeBackImg0">
 */
export default {
}
