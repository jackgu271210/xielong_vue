import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home/index.vue';
import About from '@/views/About';
import Product from '@/views/Product';
import News from '@/views/News';
import Partner from '@/views/Partner';
import Equipment from '@/views/Equipment';
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
    meta: {showBottomTabBar: true}
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
    path: "/equipment",
    name: "Equipment",
    component: Equipment,
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
