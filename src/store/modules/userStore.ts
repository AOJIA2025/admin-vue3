import { defineStore } from "pinia";
import userService from "@/api/user.service";
import type { user } from "@/api/types";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: null as string | null,
        username: null as string | null,
    }),
    getters: {
        getToken: state => state.token,
        getUsername: state => state.username,
    },
    actions: {
        async login(data: user) {
            const { code, token }: any
                = await userService.login(data);
            if (code === '000000') {
                this.token = token;
                await this.setUsername();
            } else {
                return false;
            }
        },
        async setUsername() {
            const { code, data: { username } }: any = await userService.info();
            if (code === '000000') {
                this.username = username;
            }
        }
    }
})