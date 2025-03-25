<template>
    <div>
        <t-layout class="body">
            <t-aside class="aside">
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
import headerPage from '@/view/layout/components/header.vue';
import asidePage from '@/view/layout/components/aside.vue';
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
</style>