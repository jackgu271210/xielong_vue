<template>
  <div class="section indexpro">
    <div class="container">
      <div class="title">
        <h2>热门产品</h2>
      </div>
      <div class="tab">
        <div class="tab_bar">
          <ul>
            <li href="javascript:;"
              @click="tab(index)"
              v-for="(item,index) in indexProList" :key="item.index"
              :class="{active: index === curId}"
              >
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="tab_con">
          <swiper 
            v-show="index === curId"
            class="swiper" 
            ref="mySwiper" 
            :options="swiperOption"
            v-for="(item, index) in indexProList" 
            :key="item.index"
          >
            <swiper-slide
              v-for="subItem in item.list"
              :key="subItem.index"
              class="list"
            >
              <div class="pic">
                <img :src="subItem.imgUrl" alt="" />
              </div>
              <span>{{ subItem.title }}</span>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="button">
          <a href="javascript:;" class="prev">&lt;</a> 
          <a href="javascript:;" class="more">查看更多 ></a>
          <a href="javascript:;" class="next">&gt;</a> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProList",
    props: ['indexProList'],
    data() {
        return {
            curId: 0,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 8,
                observer: true,
                navigation: {
                  nextEl: '.indexpro .next',
                  prevEl: '.indexpro .prev',
              }
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      tab(index) {
        this.curId = index;
      }
    }
}
</script>

<style lang="stylus" scoped>
  .tab
    .tab_bar
      overflow auto
      margin-bottom 10px
      ul
        white-space nowrap
        li
          position relative
          display inline-block
          line-height: 2.4;
          font-size 16px
        li+li
          position relative
          margin-left 30px
        li+li::before 
          content: "";
          position: absolute;
          left: -16px;
          top: 30%;
          height: 40%;
          border-left: 1px solid #ddd;
        .active
          border-bottom 1px solid #c5380e
    .tab_con
      .list
        text-align center
        .pic
          position: relative;
          padding-bottom: 75%;
          margin: 0 auto;
          overflow: hidden;
          img
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        span
          display block
          margin-top 6px
          color #666
  .button
    width 50%
</style>