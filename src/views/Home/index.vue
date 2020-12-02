<template>
  <div class="home">
    <ban-swiper />
    <div class="section indexabout">
      <div class="container">
        <div class="sec_ti">
          <h3><i>协龙集团</i>高新化纤公司</h3>
      </div>
      <div class="content">
        <p>
          协龙集团是一家专业从事鞋材纺织的材料纺、织、染一体供应商，创始于1992年，总部位于中国有鞋都之称的福建省晋江市。我们拥有石狮、晋江、漳平生产基地以及广东等办事处，超过300,000平方米厂区面积以及超过700名员工的团队。协龙团队通过多年的努力与发展，目前成为国内运动鞋材行业内最具有竞争力和创新力的指定供应商，合作伙伴包括有New Balance、Puma、Asics、安踏、乔丹、李宁、特步等国内外知名运动品牌。
        </p>
        <p>
          协龙一直坚持秉着3S的核心服务宗旨：“节省时间，节省成本，节约损失”，主张共创、共赢的产业价值，致力为整体产业链提供更完善的解决方案。
        </p>
        <div class="button">
          <a href="javascript:;" class="more">了解详情 ></a>
        </div>
      </div>
      </div>
    </div>
    <div class="section indexcate">
      <ul>
        <li v-for="item in catePicList" :key="item.index">
          <div class="cate_item item_01" :style="{backgroundImage:'url(' + item.imgUrl + ')'}">
            <h3>{{item.title}}</h3>
          </div>
        </li>
      </ul>
    </div>
    <pro-list :indexProList="indexProList" />
    <news-list :indexNewsList="indexNewsList" />
    <div class="section indexaddr">
      <div class="pic">
        <img src="http://www.bt-fiber.com/images/111.jpg" alt="">
      </div>
      <div class="button">
        <a href="javascript:;">
          店铺预览
          <i class="iconfont"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BanSwiper from './Children/BanSwiper'
import ProList from '@/components/ProList'
import NewsList from '@/components/NewsList'
export default {
  name: 'Home',
  components: {
    BanSwiper,
    ProList,
    NewsList
  },
  data() {
    return {
      catePicList: [
        {
          "title": "汽车油路密封",
          "imgUrl": "http://www.seacorubber.com/images/cate_01.jpg"
        },
        {
          "title": "新能源",
          "imgUrl": "http://www.seacorubber.com/images/cate_02.jpg"
        },
        {
          "title": "电动工具类",
          "imgUrl": "http://www.seacorubber.com/images/cate_03.jpg"
        },
        {
          "title": "汽车空调",
          "imgUrl": "http://www.seacorubber.com/images/cate_04.jpg"
        },
        {
          "title": "汽车电子",
          "imgUrl": "http://www.seacorubber.com/images/cate_05.jpg"
        },
        {
          "title": "各种异形件类",
          "imgUrl": "http://www.seacorubber.com/images/cate_06.jpg"
        }
      ],
      indexProList: [
        {
          "title": "电子产品密封件类",
          "list": [
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            }
          ]
        },
        {
          "title": "电子产品密封件类",
          "list": [
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            }
          ]
        },
        {
          "title": "电子产品密封件类",
          "list": [
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            }
          ]
        },
        {
          "title": "电子产品密封件类",
          "list": [
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            }
          ]
        },
        {
          "title": "电子产品密封件类",
          "list": [
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            },
            {
              "imgUrl":"http://www.seacorubber.com/UploadFiles/202011231622632392.jpg",
              "title":"电子密封橡胶制品"
            }
          ]
        }
      ],
       indexNewsList: [
         {
           "title":"密码件的贮存要关注哪些点，一起来看看！",
           "desc":"1. 密封件的存放室温最好在30℃以下，避免密封件产生高温老化；2. 密封件必须存放在密封包装内，避免和空气中的水分或尘埃接触；3. 密封件必须避开强光照射，避免密封件被空气中臭氧侵蚀或提早老化。各种密封其性能影响因素是不同的，如机械密封（填料密封等）影响因素有温度、介质、磨损、所承受压力等。",
           "imgUrl": "http://www.seacorubber.com/UploadFiles/2020112315482329913.jpg"
         },
         {
           "title":"密封件行业整体乐观，机械密封行业前景美好！",
           "desc":"工业应用领域中，密封是指用于防止液体或气体等流体从机械设备缝隙相邻结合面间泄漏，以及防止外界杂质如灰尘与水分等侵入机器设备内部的零部件。广泛应用在石油、化工、冶金、航空等领域，确保设备的稳定正常运行。凡是泵、压缩机等运作流体有关的旋转机械都会用到密封件，尽管密封件占整套设备的比重不高，但是其性能对于保障设备安全稳定运行、以及环境保护具有极其重要的意义。",
           "imgUrl": "http://www.seacorubber.com/ueditor/asp/upload/image/20201123/16061199747008116.jpg"
         },
         {
           "title":"密封件竟然还能这样用，您知道吗？",
           "desc":"橡胶密封件是密封技术中广泛应用的一类橡胶制品。不同橡胶材料制成的密封件，可适用于不同的应用。如贝克密封推出的荧光硅胶密封件，以及耐高温机油、适应于汽车工程的橡胶密封件，同时也推出低摩擦系数的橡胶材料，让橡胶密封件可适用于化学品严重暴露的应用环境中。",
           "imgUrl": "http://www.seacorubber.com/ueditor/asp/upload/image/20201123/16061177148707563.jpg"
         }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.indexabout
  text-align center
  .sec_ti
    margin-bottom 20px
  .content
    .button
      display block
.indexcate
  ul
    display flex
    flex-wrap wrap
    li
      width 50%
      flex 0 0 auto
      .cate_item
        position relative
        height 174px
        background-size cover
        h3
          width 100%
          line-height 50px
          position absolute
          left 0
          bottom 0
          color #fff
          text-align center
          background-image linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6)) 
.indexaddr
  .pic
    img
          
</style>