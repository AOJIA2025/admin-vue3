import { createRouter, createWebHashHistory } from "vue-router";
import { setupRouterGuards } from "./routerGuards";
import { constantRoutes } from '@/router/modules/constantRoutes';

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
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