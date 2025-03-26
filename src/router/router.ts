import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

import login from "@/view/login/index.vue";
import layout from "@/components/layout/layout.vue";
import error401 from '@/view/error/error401.vue';
import error403 from "@/view/error/error403.vue";
import error404 from "@/view/error/error404.vue";
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
            title: 'Login',
        }
    },
    {
        path: '/error401',
        name: 'Error401',
        component: error401,
        meta: {
            requiresAuth: false,
            title: '401'
        }
    },
    {
        path: '/error403',
        name: 'Error403',
        component: error403,
        meta: {
            requiresAuth: false,
            title: '403'
        }
    },
    {
        path: '/error404',
        name: 'Error404',
        component: error404,
        meta: {
            requiresAuth: true,
            title: '404',
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