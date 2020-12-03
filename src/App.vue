<template>
  <div id="app">
    <common-header />
    <router-view />
    <common-footer />
    <tab-bar v-show="$route.meta.showBottomTabBar" />
  </div>
</template>

<script>
  import CommonHeader from './components/CommonHeader'
  import CommonFooter from './components/CommonFooter'
  import TabBar from './components/TabBar'
  export default {
    name: 'App',
    components: {
      CommonHeader,
      CommonFooter,
      TabBar
    }
  }
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background-color #f5f5f5
  position relative
</style>
