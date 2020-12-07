<template>
  <div class="shoplist">
    <div class="pic">
      <img src="http://www.bt-fiber.com/images/111.jpg" alt="" />
    </div>
    <div class="container">
      <div class="title">
        <h2>门店查询</h2>
      </div>
      <div class="amap-wrapper">
        <el-amap
          class="amap-box"
          :vid="amap - vue"
          :center="center"
          :mapStyle="mapStyle"
          :zoom="zoom"
        >
          <el-amap-marker
            v-for="u in markers"
            :position="u.position"
            :key="u.index"
          ></el-amap-marker>
        </el-amap>
      </div>
      <div class="select_control">
        <div class="title">
          请选择您所在的的城市地点，查询您附近的门店
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item  prop="region">
            <el-select  placeholder="全国">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  prop="region">
            <el-select  placeholder="江苏">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  prop="region">
            <el-select  placeholder="常州">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="result">
          <ul class="result_wrap">
            <li>
              <div class="result_item">
                <h3>门店中心</h3>
                <p>
                  Tel：<span>0769-22493466</span>
                </p>
                <p>
                  Time：<span>10：00 — 22：00</span>
                </p>
                <p>
                  Addr：<span>莞城东兴路166号四楼</span>
                </p>
                <div class="iconlist">
                  <a href="javascript:;">
                    <i class="iconfont">&#xe60c;</i>
                  </a>
                  <a href="javascript:;">
                    <i class="iconfont">&#xe78e;</i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="result_item">
                <h3>门店中心</h3>
                <p>
                  Tel：<span>0769-22493466</span>
                </p>
                <p>
                  Time：<span>10：00 — 22：00</span>
                </p>
                <p>
                  Addr：<span>莞城东兴路166号四楼</span>
                </p>
                <div class="iconlist">
                  <a href="javascript:;">
                    <i class="iconfont">&#xe60c;</i>
                  </a>
                  <a href="javascript:;">
                    <i class="iconfont">&#xe78e;</i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="result_item">
                <h3>门店中心</h3>
                <p>
                  Tel：<span>0769-22493466</span>
                </p>
                <p>
                  Time：<span>10：00 — 22：00</span>
                </p>
                <p>
                  Addr：<span>莞城东兴路166号四楼</span>
                </p>
                <div class="iconlist">
                  <a href="javascript:;">
                    <i class="iconfont">&#xe60c;</i>
                  </a>
                  <a href="javascript:;">
                    <i class="iconfont">&#xe78e;</i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="result_item">
                <h3>门店中心</h3>
                <p>
                  Tel：<span>0769-22493466</span>
                </p>
                <p>
                  Time：<span>10：00 — 22：00</span>
                </p>
                <p>
                  Addr：<span>莞城东兴路166号四楼</span>
                </p>
                <div class="iconlist">
                  <a href="javascript:;">
                    <i class="iconfont">&#xe60c;</i>
                  </a>
                  <a href="javascript:;">
                    <i class="iconfont">&#xe78e;</i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="result_item">
                <h3>门店中心</h3>
                <p>
                  Tel：<span>0769-22493466</span>
                </p>
                <p>
                  Time：<span>10：00 — 22：00</span>
                </p>
                <p>
                  Addr：<span>莞城东兴路166号四楼</span>
                </p>
                <div class="iconlist">
                  <a href="javascript:;">
                    <i class="iconfont">&#xe60c;</i>
                  </a>
                  <a href="javascript:;">
                    <i class="iconfont">&#xe78e;</i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resizeEnable: true,
      zoom: 10,
      center: [119.945579, 31.813319],
      mapStyle: "amap://styles/33ac9bd25289b5229362e1f52b481f49",
      markers: [
        {
          position: [121.5273285, 31.41515044],
        },
        {
          position: [121.5273286, 31.31515045],
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.shoplist
  .pic
    margin-bottom 20px
  .amap-wrapper
    height: 200px
  .select_control
    padding-top 20px
    .el-form
      display flex
      justify-content space-between
      padding-bottom 20px
      .el-form-item
        width 32%
        margin-bottom: 0
        ::v-deep .el-form-item__content
          margin-left: 0 !important
    .result
      li
        border 1px solid #DCDFE6
        padding 14px
        border-radius 10px
        margin-bottom: 20px;
        .result_item
          position relative
          h3
            margin-bottom 16px
          p
            margin-bottom 0
            color #333
            span
              color #666
          .iconlist
            position absolute
            right 3%
            top 3%
            a
              display inline-block
              width 30px
              height 30px
              line-height 30px
              text-align center
              border-radius 50%
              color #fff
              background-color #007dbe
            a:nth-child(1)
              margin-right 10px
</style>