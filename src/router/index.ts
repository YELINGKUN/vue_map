import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect:"HomeView",
      component: () => import("../views/Home.vue"),
      children: [
        {
          path: "/HomeView",
          name: "HomeView",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
});
debugger;
// 导出路由
export default router;
