<template>
  <div class="about">
    <div class="inner_ban ban_gy">
      <div class="banner_wrap">
        <div class="banner_txt">
          <h2>关于我们</h2>
          <span>ABOUT US</span>
        </div>
        <div class="banner_nav">
          <div class="container">
            <ul>
              <li
                v-for="idx in aboutItem"
                :key="idx.index"
                :class="{active:activeName == idx.title}"
                @click="changeItem(idx)" 
              >
                {{idx.title}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="ban_cover"></div> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      activeName: '关于我们',
      aboutItem: [
        {
          title:'关于我们',
          url:'subabout'
        },
        {
          title:'企业文化',
          url:'subculture'
        },
        {
          title:'荣誉资质',
          url:'subhonor'
        },
        {
          title:'发展历程',
          url:'subpath'
        }
      ]
    }
  },
  methods: {
    changeItem(idx) {
      this.activeName = idx.title
      console.log(idx.url)
      this.$router.push({path: '/about/'+idx.url})
    }
  }
};
</script>

<style lang="stylus" scoped>
.about
  .ban_cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color rgba(0,0,0,.5)
    z-index 1
  .banner_wrap
    display flex
    justify-content center
    align-items center
    position absolute 
    left 0
    right 0
    top 0
    bottom 0
    z-index 2
    .banner_nav
      position absolute 
      left 0
      right 0
      bottom 0
      z-index 3
      ul
        display -webkit-box
        display flex
        -webkit-box-align center;
        align-items center
        li
          border-right 1px solid #fff
          flex-grow 1
          background-color rgb(0 125 190)
          color #fff
          height 50px
          line-height 50px
          font-size 14px
          text-align center
          cursor pointer
          &:last-child
            border-right none
        .active
          color rgb(0 125 190)
          background-color #fff

  .ban_gy
    background-image url('http://www.xlgxhx.com/images/ban_gy.jpg')
</style>