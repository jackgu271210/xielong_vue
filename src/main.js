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
  TabPane
} from 'element-ui';

Vue.use(Drawer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)

// 配置 vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
