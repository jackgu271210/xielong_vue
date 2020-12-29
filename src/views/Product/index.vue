<template>
  <div class="product">
    <div class="inner_ban ban_cp">
    </div>
    <div class="subpro section">
      <div class="container">
        <div class="title inner_ti">
          <h2>协龙产品</h2>
          <span>XIELONG PRODUCT</span>
        </div>
        <div class="subpro_list">
          <ul>
              <li
                v-for="item in prodata"
                :key="item.id"
                @click="handleClick(item.id)"
              >
                <div class="img">
                  <img :src=item.imgUrl>
                </div>
                <div class="txt">
                  <h4>{{item.title}}</h4>
                  <p>{{item.desc}}</p>
                </div>
              </li>
            </ul>
            <div class="weui-loadmore">
              <i class="weui-loading"></i>
              <span class="weui-loadmore__tips">正在加载</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'Product',
  mounted() {
    this.$store.dispatch('reqProData')
  },
  computed: {
    ...mapState(['prodata'])
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/productdetail/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .ban_cp
    background-image url('http://www.xlgxhx.com/images/ban_cp.jpg')
  .subpro_list
    ul 
      display flex
      justify-content space-between
      flex-wrap wrap
      li 
        width 48%
        margin-bottom 10px
        .txt
          margin-top 10px
          h4 
            overflow hidden
            text-overflow ellipsis 
            white-space nowrap 
            margin-bottom 10px
          p 
            line-height 20px
            overflow hidden
            text-overflow ellipsis 
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
</style>