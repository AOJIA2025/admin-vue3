<template>
    <div>
        <t-layout class="body">
            <t-aside :class="{
                'aside-show': show
            }">
                <aside-page />
            </t-aside>
            <t-layout>
                <t-header class="header">
                    <header-page />
                </t-header>
                <t-content class="content">
                    <div class="view">
                        <router-view />
                    </div>
                </t-content>
            </t-layout>
        </t-layout>
    </div>
</template>

<script lang="ts" setup>
import headerPage from './header.vue';
import asidePage from './aside.vue'
import { bizStore } from '@/store/modules/bizStore.ts';
import { computed } from 'vue';

const store = bizStore();
const show = computed(() => store.navFlag);

</script>

<style lang="less" scoped>
.body {
    height: 100vh;
    width: 100%;
}

.content {
    padding: 10px;
}

.view {
    background: #fff;
    height: 100%;
    width: 100%;
}

.aside-show {
    width: 64px !important;
}
</style>