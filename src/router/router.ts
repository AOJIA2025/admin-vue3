import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

import login from "@/view/login/index.vue";
import layout from "@/view/layout/layout.vue";
import { setupRouterGuards } from "./routerGuards";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        component: layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/view/dashboard/dashboard.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Dashboard'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta: {
            requiresAuth: false,
            title: 'Login'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // 严格模式
    strict: true,
    // 滚动行为设置
    // 设置滚动位置
    scrollBehavior: () => ({
        top: 0,
        left: 0
    })
})

setupRouterGuards(router);

export default router;