import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/HomeComponent";
import Ad from "@/components/Ads/AdComponent";
import AdList from "@/components/Ads/AdList";
import NewAd from "@/components/Ads/NewAd";
import Login from "@/components/Auth/LoginComponent";
import Registration from "@/components/Auth/RegistrationComponent";
import Orders from "@/components/User/OrdersComponent";



Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/ad/:id',
    name: 'Ad',
    component: Ad
  },
  {
    path: '/list',
    name: 'list',
    component: AdList
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
