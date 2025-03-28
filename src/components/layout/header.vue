<template>
    <div>
        <t-head-menu default-value="2-1" expand-type="popup">
            <button class="hamburger-btn" @click="toggleMenu" :class="{ active: isActive }" aria-label="Toggle Menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>

            <template #operations>
                <t-button variant="text" shape="square">
                    <t-avatar>{{ username }}</t-avatar>
                </t-button>
                <t-space>
                    <t-dropdown :options="options" trigger="click" @click="clickHandler">
                        <t-space>
                            <t-button variant="text" shape="square">
                                <template #icon><t-icon name="ellipsis" /></template>
                            </t-button>
                        </t-space>
                    </t-dropdown>
                </t-space>
            </template>
        </t-head-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { bizStore } from '@/store/modules/bizStore';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { permission } from "@/store/modules/permission";

const store: any = bizStore();
const userStore = useUserStore();
const permissionStore = permission();
const router = useRouter();
const isActive = ref<boolean>(!store.navFlag);
const username = computed(() => userStore.username?.slice(0, 1) || '未获取');

const toggleMenu = (): void => {
    isActive.value = !isActive.value;
    store.setNavFlag(!isActive.value);
};

const options = [
    { content: '退出登录', value: 1 },
];

const clickHandler = ({ value }: { content: string, value: number }) => {
    if (value === 1) {
        // 退出登录
        userStore.$reset();
        permissionStore.$reset();
        store.$reset();
        localStorage.clear();
        router.replace('/login');
    }
}

</script>

<style lang="less" scoped>
/* 按钮样式 */
.hamburger-btn {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-left: -22px;
}

/* 三条杠 */
.hamburger-btn .line {
    width: 24px;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
}

/* 激活状态（X 图标） */
.hamburger-btn.active .line:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.hamburger-btn.active .line:nth-child(2) {
    opacity: 0;
}

.hamburger-btn.active .line:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}
</style>@/store/modules/user