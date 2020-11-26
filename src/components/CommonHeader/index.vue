<template>
  <div class="common_header">
    <div class="header">
      <a class="logo" href="/">
        <img src="../../assets/logo.png" alt="" />
      </a>
      <div class="menu" @click="drawer = true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="header_nav">
      <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        :modal="false"
        :before-close="handleClose"
      >
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      drawer: false,
      direction: "ttb",
    };
  },
};
</script>

<style lang="stylus" scoped>
    .common_header
        width: 100%;
        height: 60px;
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        .header
            height: 100%;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
        .header_nav
            position fixed
            left 0
            top 60px
            background-color #f8f8f8
            width 100%
            height 100%
</style>