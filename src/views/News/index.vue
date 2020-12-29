<template>
  <div class="news">
      <div class="inner_ban ban_xw">
      </div>
      <div class="section subnews">
        <div class="container">
          <div class="title inner_ti">
            <h2>新闻资讯</h2>
            <span>NEWS</span>
          </div>
          <div class="subnews_list">
            <ul>
              <li
                v-for="item in newsdata"
                :key="item.id"
              >
                <a href="javascript:;">
                  <div class="img">
                    <img :src=item.imgUrl>
                  </div>
                  <div class="txt">
                    <h4>{{item.title}}</h4>
                    <p>{{item.desc}}</p>
                    <span>{{item.time}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'News',
  mounted() {
    this.$store.dispatch('reqNewsData')
  },
  computed: {
    ...mapState(['newsdata'])
  }
}
</script>

<style lang="stylus" scoped>
  .news
    background-color #f5f5f5
    .subnews_list
      li
        margin-bottom 20px
        .txt
          padding 20px
          background-color #fff
          box-shadow 0 4px 8px rgba(0,0,0,.1)
          h4 
            margin-bottom 6px
          p 
            line-height 20px
            overflow hidden
            text-overflow ellipsis 
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
  .ban_xw
      background-image url('http://www.xlgxhx.com/images/ban_xw.jpg')
</style>