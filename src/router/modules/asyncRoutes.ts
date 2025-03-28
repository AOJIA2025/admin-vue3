import type { RouteRecordRaw } from "vue-router"
import { useUserStore } from '@/store/modules/user';
import router from "../router";
import { permission } from "@/store/modules/permission";
// 需要由权限控制的路由
export let asyncRoutes: Array<RouteRecordRaw> = [

];

export const addRoutes = (route: any) => {
    const permissionStore = permission();
    asyncRoutes = filterRoute(route);
    permissionStore.setListRoutes(asyncRoutes);

    asyncRoutes.forEach((item: any) => {
        router.addRoute(item);
    })

    router.addRoute({
        path: '/:pathMatch(.*)*',
        redirect: '/error404'
    })
}

const filterRoute = (route: any) => {

    const userStore = useUserStore();
    let newArr: any = [];
    for (let i = 0; i < route.length; i++) {
        let copyRoute: any = null;
        if (route[i].meta.permissions.includes(userStore.roles)) {
            copyRoute = formatRoute(route[i]);
            if (route[i].children?.length) {
                copyRoute.children = filterRoute(route[i].children);
            }
        }

        copyRoute && newArr.push(copyRoute);
    }

    return newArr;
}

const formatRoute = (route: any) => {
    const routeComponents = import.meta.glob('/src/view/**/*.vue');
    const layoutComponent = import.meta.glob('/src/components/layout/layout.vue');

    const componentPath = route.component === 'layout'
        ? '/src/components/layout/layout.vue'
        : `/src/view${route.component.startsWith('/') ? '' : '/'}${route.component}.vue`;

    const componentLoader = route.component === 'layout'
        ? layoutComponent[componentPath]
        : routeComponents[componentPath];

    if (!componentLoader) {
        console.error(`[路由配置错误] 组件不存在: ${componentPath}`);
        return null;
    }

    return {
        path: route.path,
        name: route.name,
        redirect: route?.redirect || '',
        component: componentLoader,
        meta: { ...route.meta }
    };
}