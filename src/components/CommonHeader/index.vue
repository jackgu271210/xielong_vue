<template>
  <div class="common_header">
    <div class="header">
      <a class="logo" href="/">
        <img src="../../assets/logo.png" alt="" />
      </a>
      <div class="menu" 
        @click="menuSwitch()"
        :class="{'active': isActive}"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :show-close="false"
      :withHeader="false"
    >
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/home">
            <span>首页</span>
        </el-menu-item>
        <el-submenu index="/about">
          <template slot="title">
            <span>走进协龙</span>
          </template>
          <el-menu-item index="about/subabout">
            <span slot="title">企业简介</span>
          </el-menu-item>
          <el-menu-item index="about/subculture">
            <span slot="title">企业文化</span>
          </el-menu-item>
          <el-menu-item index="about/subhonor">
            <span slot="title">荣誉资质</span>
          </el-menu-item>
          <el-menu-item index="about/subpath">
            <span slot="title">发展历程</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/product">
          <template slot="title">
            <span>产品世界</span>
          </template>
          <el-menu-item index="3-1">
            <span slot="title">尼龙热熔丝</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <span slot="title">涤纶热熔丝</span>
          </el-menu-item>
          <el-menu-item index="3-3">
            <span slot="title">TPU热熔网膜</span>
          </el-menu-item>
          <el-menu-item index="3-4">
            <span slot="title">TPU特种长丝</span>
          </el-menu-item>
          <el-menu-item index="3-5">
            <span slot="title">TPU双组份丝</span>
          </el-menu-item>
          <el-menu-item index="3-6">
            <span slot="title">TPU热熔单丝</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/news">
          <template slot="title">
            <span>新闻资讯</span>
          </template>
          <el-menu-item index="4-1">
            <span slot="title">企业新闻</span>
          </el-menu-item>
          <el-menu-item index="4-2">
            <span slot="title">行业新闻</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/shoplist">
            <span>门店信息</span>
        </el-menu-item>
        <el-menu-item index="/contact">
            <span>联系我们</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      activeIndex: '1',
      isActive: false,
      drawer: false,
      direction: "ttb",
    }
  },
  methods: {
    menuSwitch() {
      this.isActive = !this.isActive;
      this.drawer = !this.drawer;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" scoped>
::v-deep .ttb 
  height 100% !important
.common_header
  min-height 60px
  .header
    width 100%
    height 60px
    background-color #fff
    position fixed
    left 0
    top 0
    z-index 9999
    padding 0 20px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    box-shadow 0 0 5px rgba(0,0,0,0.1)
    .logo
      width 50%
      img 
        width 100%
    .menu
      width 20px
      height 20px
      position relative
      span
        position absolute
        left 0
        width 20px
        height 2px
        background-color #333
        &:nth-child(2)
          margin-top 8px
        &:nth-child(3)
          margin-top 16px
    .active
      span
        &:nth-child(1)
          margin-top 9px
          transform rotate(135deg)
        &:nth-child(2)
          opacity 0
        &:nth-child(3)
          margin-top 9px
          transform rotate(-135deg)
  .el-drawer__wrapper
    position fixed
    top 60px
    right 0
    bottom 0
    left 0
    overflow hidden
    margin 0
    li
      border-bottom 1px solid #ddd
      &:last-child
        border-bottom none
      .el-menu-item
        font-size 16px
      .el-submenu
        v-deep .el-submenu__title
          font-size 16px
</style>