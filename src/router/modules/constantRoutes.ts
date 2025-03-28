import login from "@/view/login/index.vue";
import error401 from '@/view/error/error401.vue';
import error403 from "@/view/error/error403.vue";
import error404 from "@/view/error/error404.vue";
import type { RouteRecordRaw } from "vue-router";

// 无需用权限控制的路由
export const constantRoutes: Array<RouteRecordRaw> = [
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
            requiresAuth: false,
            title: '404',
        }
    },
]