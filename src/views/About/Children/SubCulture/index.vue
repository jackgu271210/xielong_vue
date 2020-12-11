<template>
  <div class="subculture section">
    <div class="container">
      <div class="title inner_ti">
        <h2>企业文化</h2>
        <span>COMPANY CULTURE</span>
      </div>
      <div class="content">
        <ul>
          <li>
            <div class="cul_item">
              <div class="item_l">
                <img src="http://www.xlgxhx.com/images/cul_02.jpg" alt="">
              </div>
              <div class="item_r">
                <h4>华立宗旨</h4>
                <h5>增进社会福祉 实现人生价值</h5>
                <p>Holley’s Purposes——To increase the social welfare and realize the life value</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SubCulture',
    data() {
      return {
        culList:[
          {
            imgUrl:'http://www.xlgxhx.com/images/cul_02.jpg',
            bigTitle:'华立宗旨',
            smTitle:'增进社会福祉 实现人生价值',
            desc:'Holley’s Purposes——To increase the social welfare and realize the life value'
          }
        ]
      }
    }
}
</script>

<style lang="stylus" scoped>
  .subculture
    li
      padding 20px
      margin-bottom 10px
      background-color #f5f5f5
      .cul_item
        display flex
        justify-content space-between
        .item_l
          position relative
          width 140px
          margin-right 18px
          img 
            position absolute 
            left 0
            top 0
            width 100%
            height 100%
            object-fit cover
        .item_r
          flex 1
      h4
        font-size 16px
        font-weight bold
        color #007dbe
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 1
        overflow hidden
        text-overflow ellipsis
        line-height 24px
      h5
        font-size 14px
        font-weight bold
        color #666
        margin-top 4px
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 1
        overflow hidden
        text-overflow ellipsis
        line-height 18px
      p
        font-size 12px
        margin-top 8px
        color #595656
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 3
        overflow hidden
        text-overflow ellipsis 
        line-height 16px
</style>