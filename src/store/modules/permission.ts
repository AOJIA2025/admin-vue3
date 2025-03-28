import { defineStore } from "pinia";
import { userService } from '@/api/index';
import { addRoutes } from "@/router/modules/asyncRoutes";

export const permission = defineStore('permission', {
    state: () => ({
        addRoutes: [],
        listRoutes: [],
        position: '0-0',
    }),
    getters: {
        getAddRoutes: state => state.addRoutes,
        getListRoutes: state => state.listRoutes,
        getPosition: state => state.position,
    },
    actions: {
        async initPermission(roles: string): Promise<void> {
            const { code, data }: any = await userService.getPermission({ roles });
            if (code === '000000' && data?.length) {
                this.addRoutes = data;
                await addRoutes(data);
            }
        },
        setAddRoutes(addRoutes: any) {
            this.addRoutes = addRoutes;
        },
        setListRoutes(listRoutes: any) {
            this.listRoutes = listRoutes;
        },
        setPosition(position: any) {
            this.position = position;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'permission',
                storage: sessionStorage  // 这边设置的sessionStorage，但是还是存储在localStorage中
            }
        ]
    }
})