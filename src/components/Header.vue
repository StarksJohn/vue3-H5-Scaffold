<template>
  <div class="block"></div>
  <van-nav-bar class="header" @click-left="back" :title="title" left-text="返回" left-arrow>
    <template #right>
      <i class="iconfont more" />
    </template>
  </van-nav-bar>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  setup() {
    const router = useRouter()

    // 返回方法
    const back = () => {
      router.back()
    }

    return {
      back
    }
  }
}
</script>

<style lang='less' scoped>
@import url('../config/custom.less');

  .block {
    width: 100%;
    height: @headerh;
    background-color: #4b67e2;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    //height:46px;//https://vant-contrib.gitee.io/vant/v2/#/en-US/nav-bar  默认 @nav-bar-height =46px
    .more {
      font-size: 20px;
    }
  }
</style>
