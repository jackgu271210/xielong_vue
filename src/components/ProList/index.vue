<template>
  <div class="section indexpro">
    <div class="title">
      -
      <span>热门产品</span>
      -
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in indexProList"
        :key="item.index"
        :label="item.title"
        :name="item.index"
      >
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="subItem in item.list"
            :key="subItem.index"
            class="list"
          >
            <img :src="subItem.imgUrl" alt="" />
            <span>{{ subItem.title }}</span>
          </swiper-slide>
        </swiper>
      </el-tab-pane>
    </el-tabs>
    <div class="button">
        <a href="javascript:;" class="prev">&lt;</a> 
         <a href="javascript:;" class="more">查看更多 ></a>
        <a href="javascript:;" class="next">&gt;</a> 
    </div>
  </div>
</template>

<script>
export default {
    name: "ProList",
    props: ['indexProList'],
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 8
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>