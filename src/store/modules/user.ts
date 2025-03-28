import { defineStore } from "pinia";
import { userService } from "@/api/index";
import type { user } from "@/types/types";
import { permission } from '@/store/modules/permission';
interface UserAuth {
    token: string | null;
    username: string | null;
    roles: string | null;
}

export const useUserStore = defineStore('user-store', {
    state: (): UserAuth => ({
        token: '',
        username: '',
        roles: ''
    }),
    getters: {
        getToken: state => state.token,
        getUsername: state => state.username,
        getRoles: state => state.roles,
    },
    actions: {
        async login(data: user): Promise<undefined | boolean> {
            const { code, token }: any
                = await userService.login(data);
            if (code === '000000') {
                this.token = token;
                await this.setUsername();
            } else {
                return false;
            }
        },
        async setUsername(): Promise<void> {
            const permissionStore = permission();
            const { code, data: { username, roles } }: any = await userService.info();
            if (code === '000000') {
                this.username = username;
                this.roles = roles;

                await permissionStore.initPermission(roles);
            }
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user-store',
                storage: sessionStorage  // 这边设置的sessionStorage，但是还是存储在localStorage中
            }
        ]
    }
})