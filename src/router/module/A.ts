import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/A/A1",
        name: "A1",
        meta:{
          title:"是A1"
        },
        component: () => import("@/views/A/A1.vue"),
      },
      {
        path: "/A/A2",
        name: "A2",
        meta:{
          title:"是A2"
        },
        component: () => import("@/views/A/A2.vue"),
      },
]

export default routes;