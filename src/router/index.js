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
    path: "/piliers",
    name: "Piliers",
    component: () =>
      import(/* webpackChunkName: "piliers" */ "../pages/Piliers.vue"),
  },
  {
    path: "/donation",
    name: "Donation",
    component: () =>
      import(/* webpackChunkName: "donation" */ "../pages/Donation.vue"),
  },
  {
    path: "/mecenat",
    name: "Mecenat",
    component: () =>
      import(/* webpackChunkName: "mecenat" */ "../pages/Mecenat.vue"),
  },
  {
    path: "/album",
    name: "Carotte",
    component: () =>
      import(/* webpackChunkName: "carotte" */ "../pages/Carotte.vue"),
  },
  {
    path: "/business-form",
    name: "Business",
    component: () =>
      import(/* webpackChunkName: "business" */ "../pages/Business.vue"),
  },
  {
    path: "/album/nouveau",
    name: "AlbumForm",
    component: () =>
      import(/* webpackChunkName: "albumForm" */ "../pages/AlbumForm.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
