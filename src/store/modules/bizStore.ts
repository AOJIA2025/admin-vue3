import { defineStore } from "pinia";

interface Biz {
    navFlag: boolean;
}

export const bizStore = defineStore('biz-store', {
    state: (): Biz => ({
        navFlag: true
    }),
    getters: {
        getNavFlag: state => state.navFlag,
    },
    actions: {
        setNavFlag(navFlag: boolean): void {
            this.navFlag = navFlag;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'biz-store',
                storage: sessionStorage  // 这边设置的sessionStorage，但是还是存储在localStorage中
            }
        ]
    }
})