import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/B/B1",
        name: "BB1",
        meta: {
            title: "是B1"
        },
        component: () => import("@//views/B/B1.vue"),
        children: []
    },
    {
        path: "/B/B2/B2_1",
        name: "B2_1",
        meta: {
            title: "是B2_1"
        },
        component: () => import("@/views/B/B2/B2_1.vue"),
    },
]

export default routes;