<template>
  <div class="section subhonor">
      <div class="container">
        <div class="title inner_ti">
          <h2>荣誉资质</h2>
          <span>HONOR</span>
        </div>
        <div class="content">
          <swiper class="swiper" :options="swiperOptionHonor">
            <swiper-slide
              v-for="item in honorPic"
              :key="item.index"
            >
              <img :src="item">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "SubHonor",
    data() {
        return {
            honorPic: [
                'http://www.xlfibre.com/UploadFiles/201832615194736119.jpg',
                'http://www.xlfibre.com/UploadFiles/201832615182320453.jpg',
                'http://www.xlfibre.com/UploadFiles/201832615192321777.jpg',
                'http://www.xlfibre.com/UploadFiles/20183261520970655.jpg',
                'http://www.xlfibre.com/UploadFiles/201832615202772451.jpg',
                'http://www.xlfibre.com/UploadFiles/2018329920589084.jpg'
            ],
            swiperOptionHonor: {
                slidesPerView: 3,
                spaceBetween: 8,
                autoplay: true,
                loop: true,
                loopFillGroupWithBlank: true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .subhonor
        .swiper-slide
            height 80px
            padding 6px
            border 1px solid #ddd
            img
                width 100%
                height 100%
</style>