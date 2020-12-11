import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home/index.vue';

import About from '@/views/About';
import SubAbout from '@/views/About/Children/SubAbout';
import SubCulture from '@/views/About/Children/SubCulture';
import SubHonor from '@/views/About/Children/SubHonor';
import SubPath from '@/views/About/Children/SubPath';

import Product from '@/views/Product';
import News from '@/views/News';
import Partner from '@/views/Partner';
import ShopList from '@/views/ShopList';
import Contact from '@/views/Contact';

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {showBottomTabBar: true}
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {showBottomTabBar: true},
    children:[
      {
        path: "subabout",
        name: "SubAbout",
        component: SubAbout,
        meta: {showBottomTabBar: true}
      },
      {
        path: "subculture",
        name: "SubCulture",
        component: SubCulture,
        meta: {showBottomTabBar: true}
      },
      {
        path: "subhonor",
        name: "SubHonor",
        component: SubHonor,
        meta: {showBottomTabBar: true}
      },
      {
        path: "subpath",
        name: "SubPath",
        component: SubPath,
        meta: {showBottomTabBar: true}
      }
    ]
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    meta: {showBottomTabBar: true}
  },
  {
    path: "/news",
    name: "News",
    component: News,
    meta: {showBottomTabBar: true}
  },
  {
    path: "/partner",
    name: "Partner",
    component: Partner,
    meta: {showBottomTabBar: true}
  },
  {
    path: "/shoplist",
    name: "ShopList",
    component: ShopList,
    meta: {showBottomTabBar: true}
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {showBottomTabBar: true}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
