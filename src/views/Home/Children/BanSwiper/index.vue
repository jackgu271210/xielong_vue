<template>
  <div v-swiper:mySwiper="swiperOption" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
    name: 'BanSwiper',
    data () {
      return {
        banners: [ 'http://www.xlgxhx.com/images/ban_index_01.jpg', 'http://www.xlgxhx.com/images/ban_index_02.jpg'],
        swiperOption: {
          autoplay: 5000,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          // ...
        }
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
    }
}
</script>

<style lang="stylus" scoped>
.swiper-slide
  img
    width: 100%
</style>