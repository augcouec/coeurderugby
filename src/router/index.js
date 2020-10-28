import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/jeu",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../pages/Game.vue"),
  },
  {
    path: "/valeurs",
    name: "Values",
    component: () =>
      import(/* webpackChunkName: "values" */ "../pages/Values.vue"),
  },
  {
    path: "/dons",
    name: "Dons",
    component: () => import(/* webpackChunkName: "dons" */ "../pages/Dons.vue"),
  },
  {
    path: "/dons/donation",
    name: "Donation",
    component: () =>
      import(/* webpackChunkName: "donation" */ "../pages/Donation.vue"),
  },
  {
    path: "/dons/mecenat",
    name: "Mecenat",
    component: () =>
      import(/* webpackChunkName: "mecenat" */ "../pages/Mecenat.vue"),
  },
  {
    path: "/dons/album",
    name: "Carotte",
    component: () =>
      import(/* webpackChunkName: "carotte" */ "../pages/Carotte.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
