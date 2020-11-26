<template>
  <div class="tab_bar">
      <span class="tab_item" :class="{on: $route.path.includes('/home')}" @click="switchTo('/home')">
          <i class="iconfont">&#xe677;</i>
          <span>首页</span>
      </span>
      <span class="tab_item" :class="{on: $route.path.includes('/about')}" @click="switchTo('/about')">
          <i class="iconfont">&#xe678;</i>
          <span>关于</span>
      </span>
      <span class="tab_item" :class="{on: $route.path.includes('/product')}" @click="switchTo('/product')">
          <i class="iconfont">&#xe62c;</i>
          <span>产品</span>
      </span>
      <span class="tab_item" :class="{on: $route.path.includes('/contact')}" @click="switchTo('/contact')">
          <i class="iconfont">&#xe66f;</i>
          <span>联系</span>
      </span>
  </div>
</template>

<script>
export default {
    name: "TabBar",
    methods: {
        switchTo(path) {
            this.$router.replace(path);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .tab_bar
        width 100%
        height 60px
        background-color #fff
        position fixed
        left 0
        bottom 0
        display flex
        z-index 999
        .tab_item
            display flex
            flex 1
            flex-direction column
            align-items center
            justify-content center
            font-size 14px
            color #666
            .iconfont
                font-size 28px
                margin-bottom 6px
        .on
            color #027de5   
</style>