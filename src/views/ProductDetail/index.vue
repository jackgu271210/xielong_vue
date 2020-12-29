<template>
  <div class="productdetail">
    <div class="subprodetail section">
      <div class="container">
        <!-- swiper1 -->
        <swiper
          class="swiper gallery-top"
          :options="swiperOptionTop"
          ref="swiperTop"
        >
          <swiper-slide 
            v-for="item in prodata"
            :key="item.id"
            class="slide-1"
            >
                <img :src=item.imgUrl>
            </swiper-slide>
          <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
          ></div>
          <div
            class="swiper-button-prev swiper-button-white"
            slot="button-prev"
          ></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper
          class="swiper gallery-thumbs"
          :options="swiperOptionThumbs"
          ref="swiperThumbs"
        >
          <swiper-slide 
            v-for="item in prodata"
            :key="item.id"
            class="slide-1"
            >
                <img :src=item.imgUrl>
            </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ProductDetail",
  data() {
      return {
          swiperOptionTop: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
  },
  mounted() {
    this.$store.dispatch('reqProData')
    console.log(this.$route.params.id)
    this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
  },
  computed: {
      ...mapState(['prodata'])
  }
}
</script>

<style>
</style>