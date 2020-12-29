<template>
  <div class="contact">
    <div class="inner_ban ban_lx"></div>
    <div class="subcont section">
      <div class="container">
        <div class="title inner_ti">
          <h2>联系我们</h2>
          <span>CONTACT US</span>
        </div>
        <div class="content">
          <div class="cont_list">
            <ul>
              <li>地址：杭州市上城区望江东路39号</li>
              <li>邮编：310000</li>
              <li>电话：<a href="tel:17816185772">17816185772</a></li>
              <li>
                邮箱：<a href="mailto:2062157548@qq.com">2062157548@qq.com</a>
              </li>
            </ul>
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
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="ruleForm.name"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="num">
              <el-input
                type="password"
                v-model="ruleForm.num"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input 
                v-model="ruleForm.email"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
      ruleForm: {
        name: '',
        num: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min:2, max: 5, message: '长度在2到5个字符', trigger: 'blur'}
        ],
        num: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: [ 'blur', 'change'] }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.ban_lx
  background-image url('http://www.xlgxhx.com/images/ban_lx.jpg')


.subcont
  .content
    background-color: #f5f5f5
    border: 1px solid #dcdcdc
    .cont_list
      padding: 20px
      li
        margin-bottom: 16px
        a
          color: inherit
    .el-form  
      padding-top 40px
      .el-form-item
        display flex
        justify-content center
        ::v-deep .el-form-item__label
          width auto !important
        ::v-deep .el-form-item__content
          margin-left 0 !important
    .amap-wrapper
      height: 200px;

</style>