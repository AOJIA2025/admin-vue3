import { defineStore } from "pinia";
import userService from "@/api/user.service";
import type { user } from "@/api/types";

interface UserAuth {
    token: string | null;
    username: string | null;
}

export const useUserStore = defineStore('user-store', {
    state: (): UserAuth => ({
        token: '',
        username: '',
    }),
    getters: {
        getToken: state => state.token,
        getUsername: state => state.username,
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
            const { code, data: { username } }: any = await userService.info();
            if (code === '000000') {
                this.username = username;
            }
        }
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