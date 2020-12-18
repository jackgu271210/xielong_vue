<template>
  <div class="product">
    <div class="inner_ban ban_cp">
      <div class="banner_wrap">
        <div class="banner_txt">
           <h2>产品中心</h2>
           <span>PRODUCT CENTER</span>
        </div>
      </div>
    </div>
    <div class="subpro section">
      <div class="container">
        <div class="title inner_ti">
          <h2>协龙产品</h2>
          <span>XIELONG PRODUCT</span>
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
            <ul
              v-show="index === curId"
              v-for="(item, index) in indexProList" 
              :key="item.index"
            >
              <li href="javascript:;"
                v-for="subItem in item.list"
                :key="subItem.index"
                class="list"
              >
                <div class="pic">
                  <img :src="subItem.imgUrl" alt="" />
                </div>
                <span>{{ subItem.title }}</span>
              </li>
            </ul>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Product',
  props: ['indexProList']
}
</script>

<style lang="stylus" scoped>
  .ban_cp
    background-image url('http://www.xlgxhx.com/images/ban_cp.jpg')
</style>