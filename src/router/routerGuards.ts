import type { Router } from "vue-router";
import { useUserStore } from "@/store/modules/userStore";

export function setupRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        // 检测是否登录
        if (to.meta.requiresAuth && !useUserStore().token) {
            next('/login');
        } else {
            next();
        }
    })
}

