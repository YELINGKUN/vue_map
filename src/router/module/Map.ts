import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/ol/olMap",
    name: "olMap",
    meta: {
      title: "二维地图"
    },
    component: () => import("@/views/ol/olMap.vue"),
  },
]

export default routes;