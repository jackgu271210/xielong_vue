import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//配置字体图标
import "@/common/css/style.css";

// 配置 element-ui
import 'element-ui/lib/theme-chalk/index.css';
import {
  Drawer,
  Menu,
  Submenu,
  MenuItem,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Select,
  Option

} from 'element-ui';

Vue.use(Drawer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)

//配置高德地图api
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '9a1277e55bfe1abecb8c22951c295473',
  //插件
  plugin: [
    'AMap.Autocomplete', 
    'AMap.PlaceSearch', 
    'AMap.Scale', 
    'AMap.OverView', 
    'AMap.ToolBar', 
    'AMap.MapType', 
    'AMap.PolyEditor', 
    'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

// 配置 vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import './mock'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
