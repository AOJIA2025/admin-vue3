import type { Router } from "vue-router";
import { useUserStore } from "@/store/modules/user";

export function setupRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        console.log(to);
        // 检测是否登录
        if (to.meta.requiresAuth && !useUserStore().token) {
            // 重定向到登录页，并携带原路径
            next({ path: '/login', query: { redirect: to.fullPath } });
        } else if (useUserStore().token && to.path === '/login') {
            next({ path: '/' });
        } else {
            next();
        }
    })
}

