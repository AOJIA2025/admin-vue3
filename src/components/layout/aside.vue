<template>
    <div>
        <t-menu v-model:expanded="expanded" theme="light" :default-value="defaultValue" expand-mutex
            :collapsed="collapsed" @change="handleChange">
            <template #logo>
                <img height="32" src="../../assets//images//M.png" alt="logo" />
                <span class="logo-title">牛马管理系统</span>
            </template>
            <t-submenu v-for="(item, index) in permissionList" :key="item.name" :value="String(index)">
                <template #icon>
                    <t-icon :name="item.meta.icon" />
                </template>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
                <t-menu-item v-for="(child, childIndex) in  item.children " :key="child.name"
                    :value="index + '-' + childIndex" :to="item.path + (item.path === '/' ? '' : '/') + child.path">
                    {{
            child.meta.title
        }}
                </t-menu-item>
            </t-submenu>
        </t-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { bizStore } from '@/store/modules/bizStore';
import { permission } from '@/store/modules/permission';

const store = bizStore();
const permissionStore = permission();
const expanded = ref<string[]>(['0']);

const collapsed = computed(() => store.navFlag);
const permissionList: any = computed(() => permissionStore.listRoutes);
const defaultValue = computed(() => {
    expanded.value = [permissionStore.position.split('-')?.[0] || '0'];
    return permissionStore.position;
});

const handleChange = (e: any) => {
    permissionStore.setPosition(e);
}

</script>

<style lang="less" scoped>
.t-demo-collapse-btn {
    color: #fff;

    &:hover {
        background-color: #4b4b4b;
        border-color: transparent;
        --ripple-color: #383838;
    }
}

:deep(.t-default-menu__inner .t-menu__logo:not(:empty)) {
    border-bottom: 0px;
}

:deep(.t-default-menu) {
    height: 100vh !important;
}

.logo-title {
    font-size: 20px;
    color: #13227a;
}
</style>