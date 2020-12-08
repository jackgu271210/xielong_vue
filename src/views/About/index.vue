<template>
  <div class="about">
    <div class="banner ban_gy">
      <div class="banner_wrap">
        <h3>关于我们</h3>
        <span>ABOUT US</span>
      </div>
    </div>
    <div class="section subabout">
      <div class="container">
        <div class="title">
          <h3>关于我们</h3>
        </div>
        <div class="pic">
          <img src="http://www.seacorubber.com/images/about_pic.jpg" alt="" />
        </div>
        <div class="txt">
          <p>
            无锡西海科技有限公司是一家专业从事橡胶密封件研发、生产和销售的企业。公司拥有先进的炼胶、硫化、加工中心、橡胶测试、注塑等设备，生产工艺严密，确保产品质量超越客户需求。目前主要生产用于家用电器、高端电子、运动器材、汽车零部件、医疗用品、机械五金等领域的橡胶密封件。可根据客户要求设计出各种性能的产品，如：高耐磨、高弹性、耐热、耐寒、耐燃、耐油、防震、耐酸碱、绝缘、导电等橡胶密封件。
          </p>
          <p>
            公司本着“诚信、务实、专业、合作、共赢”的经营理念，专注每一个产品的设计制造，不断提高产品性能与品质，以“顾客所需，我们所想；品牌至上，商誉是金”为宗旨。在成长过程中，竭诚与你携手共创繁荣。我们将以优越的品质与热忱的服务回报您给我们的厚爱。
          </p>
        </div>
      </div>
    </div>
    <div class="section subpath">
      <div class="container">
        <div class="title">
          <h3>发展历程</h3>
        </div>
        <div class="tab">
          <div class="tab_bar">
             <!-- swiper1 -->
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide 
                class="slide-1" 
                v-for="item in time"
                :key="item.index"
              >
                <div class="box">{{item}}</div>
              </swiper-slide>
            </swiper>
            <div class="tab_btn">
              <div class="prev btn_item">
                <i class="iconfont">&#xe600;</i>
              </div>
              <div class="next btn_item">
                <i class="iconfont reverse">&#xe600;</i>
              </div>
            </div>
          </div>
          <div class="tab_con">
            <!-- swiper2 Thumbs -->
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide 
                class="slide-1"
                v-for="item in events"
                :key="item.index"
              >
                <div class="box">{{item}}</div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time:[
        '2010',
        '2012',
        '2015',
        '2017',
        '2018'
      ],
      events: [
        '神州五号发射成功',
        '美国攻打伊拉克',
        '意大利出口值连续增长',
        '韩国男星浴室自杀',
        '农名工跳楼索要工资',
      ],
       swiperOptionTop: {
          loop: true,
          loopedSlides: 3, // looped slides should be the same
          spaceBetween: 0,
          slidesPerView: 3,
          touchRatio: 0.2,
          slideToClickedSlide: true,
          centeredSlides: true,
          navigation: {
            nextEl: '.prev',
            prevEl: '.next'
          }
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 3, // looped slides should be the same
          spaceBetween: 0
        }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
};
</script>

<style lang="stylus" scoped>
.about
  .ban_gy
    background-image url('http://www.seacorubber.com/images/ban_gy.jpg')
  .subabout
    .pic
      margin-bottom 20px
  .subpath
    padding-bottom 20px
    background-color #f5f5f5
    .tab_bar
      position relative
      padding 0 40px 13px 40px
      &:before
        content ""
        position absolute
        left 40px
        right 40px
        border-top 1px solid #ddd
        bottom 1em
        margin-bottom 5px
      .box
        position relative
        line-height 4
        text-align center
        &:before
          content ""
          position absolute
          width 11px
          height 11px
          border-radius 50%
          background-color #ddd
          bottom 0
          left 0
          right 0
          margin 0 auto
      .tab_btn
        .btn_item
          position absolute
          top 20px
          display flex
          justify-content center
          align-items center
          width 20px
          height 20px
          .iconfont
            display block
            width 100%
            height 100%
            line-height 20px
            text-align center
            font-size 6px
            color #666
          .reverse
            transform rotate(180deg)
        .prev
          left 0
        .next
          right 0
    .tab_con
      text-align center


</style>