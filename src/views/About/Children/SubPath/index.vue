<template>
  <div class="section subpath">
      <div class="container">
        <div class="title inner_ti">
          <h2>发展历程</h2>
          <span>DEVELOPMENT PATH</span>
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
</template>

<script>
export default {
    name: "SubPath",
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
    }
</script>

<style lang="stylus" scoped>
.subpath
    padding-bottom 20px
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
      .swiper-slide
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
      .swiper-slide-active
        .box
          &:before
              background-color #027de5
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
            font-size 18px
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