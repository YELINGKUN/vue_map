import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: 'user/userinfo',
        name: 'userinfo',
        meta: {
            title: '用户信息'
        },
        component: () => import('@/views/user/userinfo.vue')
    },
    {
        path: 'user/usermanager',
        name: 'usermanager',
        meta: {
            title: '用户管理'
        },
        component: () => import('@/views/user/usermanager.vue')
    },
]

export default routes;