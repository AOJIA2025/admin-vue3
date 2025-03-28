import { type Router } from "vue-router";
import { useUserStore } from "@/store/modules/user";
import { asyncRoutes, addRoutes } from "./modules/asyncRoutes";
import { permission } from "@/store/modules/permission";

export function setupRouterGuards(router: Router) {
    router.beforeEach(async (to, from, next) => {
        const userStore = useUserStore();
        const permissionStore = permission();

        if (userStore.token && !asyncRoutes.length) {
            permissionStore.addRoutes.length && await addRoutes(permissionStore.addRoutes);
            // 确保路由添加完成后再继续导航
            return next({ ...to, replace: true });
        }

        // 检测是否登录
        if (to.meta.requiresAuth && !userStore.token) {
            // 重定向到登录页，并携带原路径
            return to?.fullPath ? next({ path: '/login', query: { redirect: to.fullPath } }) : next('/login');
        }

        if (userStore.token && to.path === '/login') {
            return next(from.query.redirect as string || '/');
        }

        next();
    })
}
