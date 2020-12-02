<template>
  <div class="section indexnews">
    <div class="title">
      -
      <span>新闻资讯</span>
      -
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="item in indexNewsList"
        :key="item.index"
        class="list"
      >
        <div class="pic">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="content">
          <div class="content_wrap">
            <h3 class="title">{{item.title}}</h3>
            <p class="desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="button">
      <a href="javascript:;" class="more">查看更多 ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: ['indexNewsList'],
  data() {
    return {
      swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .swiper
    .list
      display flex
      height 120px
      .pic
        width 40%
      .content
        display flex
        justify-content center
        align-items center
        padding 0 16px
        width 60%
        box-sizing border-box
        background-color #f8f8f8
        .content_wrap
          width 100%
          .title
            font-size 14px 
            margin-bottom 4px
            color #333
            overflow hidden
            white-space nowrap  
            text-overflow ellipsis
            max-width 100%
          .desc
            font-size 13px
            color #666
            text-overflow ellipsis
            overflow hidden
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
  .button
    display block

</style>