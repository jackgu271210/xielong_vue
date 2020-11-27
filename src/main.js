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
  MenuItem
} from 'element-ui';

Vue.use(Drawer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
