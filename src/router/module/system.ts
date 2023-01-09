import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: 'system/systemInfo',
        name: 'systemInfo',
        meta: {
            title: '系统信息'
        },
        component: () => import('@/views/system/systemInfo.vue')
    },
    {
        path: 'system/systemManager',
        name: 'systemManager',
        meta: {
            title: '系统管理'
        },
        component: () => import('@/views/system/systemManager.vue')
    },
]

export default routes;