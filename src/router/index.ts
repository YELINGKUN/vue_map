import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { useMenu } from "@/store";
import AppLayout from "../views/AppLayout.vue";
import A from "./module/A";
import B from "./module/B";
import OlMap from "./module/Map";
import type { tagsViewType } from "@/types";

// https://zhuanlan.zhihu.com/p/420334846
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/", 
      alias:"/login",
      name: "login",
      component: () => import("@/views/login/login.vue"),
    },
    {
      path: "/AppLayout",
      name: "AppLayout",
      redirect: `/home`,
      meta: {
        title: "是布局页"
      },
      component: AppLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/Home.vue')
        },
        ...A,
        ...B,
        ...OlMap
      ],
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/commonPage/404.vue"),
    },
  ],
});

// 白名单 
const whiteList = ['/login', '/404'];

// 路由前置导航 
// https://blog.csdn.net/qq_45325810/article/details/120666011
router.beforeEach((to, from, next) => {
  const useMenuStore = useMenu();
  let item: tagsViewType = {
    path: to?.path,
    name: to?.name as string,
    title: to.meta?.title as string,
  }

  // to：即将要进入的目标
  // from：当前导航正要离开的路由
  // next：next 是一个函数，通常是指放行，next() 直接放行 ，next(路径) 跳转到某一个页面
  // 获取 token  从localstorage中获取
  const token = "token:xxxxx";
  // 判断 token 是否存在
  // if (token) {
  if (token.length > 0) {
    // console.log("token:", token);
    // 是否是登录页面
    if (to.path === '/login') {
      // 如果有 token,访问登录页面,跳转到主页
      next('/login')
    } else {
      // 如果有 token,访问不是登录页面,直接放行
      next()
    }
    useMenuStore.ADD_PAGES(item);
  } else {
    // 判断访问的路由在不在白名单
    if (whiteList.includes(to.path)) {
      // 如果没有 token,但在白名单中,则放行
      next()
    } else {
      // 如果没有 token,也不在白名单中,则跳转到登录页
      next('/login')
    }
  }
})


// 路由后置导航

router.afterEach((to, from) => {
  // ...
  // console.log("afterEach to:", to);
  // console.log("afterEach from:", from);
})



// 导出路由
export default router;
