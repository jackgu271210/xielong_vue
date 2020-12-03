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
      :before-close="handleClose"
      :withHeader="false"
    >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <template slot="title">
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <template slot="title">
            <span>关于我们</span>
          </template>
        </el-menu-item>
        <el-submenu index="3">
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
        <el-submenu index="4">
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
        <el-menu-item index="5">
          <template slot="title">
            <span>生产设备</span>
          </template>
        </el-menu-item>
        <el-menu-item index="6">
          <template slot="title">
            <span>合作伙伴</span>
          </template>
        </el-menu-item>
        <el-menu-item index="7">
          <template slot="title">
            <span>联系我们</span>
          </template>
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
      isActive: false,
      drawer: false,
      direction: "ttb",
    };
  },
  methods: {
    menuSwitch() {
      this.isActive = !this.isActive;
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang="stylus" scoped>
::v-deep .ttb 
  height: 100% !important;
.common_header
  min-height: 60px;
  .header
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    padding: 0 20px;
    box-sizing: border-box
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    .logo
      width: 50%;
      img 
        width: 100%;
    .menu
      width: 20px;
      height: 20px;
      position: relative;
      span
        position: absolute;
        left: 0;
        width: 20px;
        height: 2px;
        background-color: #333;
      span:nth-child(2)
        margin-top: 8px;
      span:nth-child(3)
        margin-top: 16px;
    .active
      span:nth-child(1)
        margin-top: 9px;
        transform: rotate(135deg);
      span:nth-child(2)
        opacity: 0;
      span:nth-child(3)
        margin-top: 9px;
        transform: rotate(-135deg);
  .el-drawer__wrapper
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    margin: 0;
    .el-menu-item
      font-size: 16px;
    .el-submenu
      ::v-deep .el-submenu__title
        font-size: 16px;
</style>