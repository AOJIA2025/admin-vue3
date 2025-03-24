<template>
    <div class="bg">
        <t-card bordered class="card">
            <!-- title -->
            <h1 class="h1">Admin-Vue3</h1>
            <!-- 用户名密码 -->
            <t-form class="form" ref="form" :rules :data="formData" :colon="true" :label-width="0"
                @submit="handleLogin">
                <t-form-item name="username">
                    <t-input v-model="formData.username" clearable placeholder="请输入账户名">
                        <template #prefix-icon>
                            <desktop-icon />
                        </template>
                    </t-input>
                </t-form-item>

                <t-form-item name="password">
                    <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码">
                        <template #prefix-icon>
                            <lock-on-icon />
                        </template>
                    </t-input>
                </t-form-item>

                <t-form-item>
                    <t-button theme="primary" type="submit" block :loading="loading">登录</t-button>
                </t-form-item>
            </t-form>
        </t-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { user } from '@/api/types';
import { useUserStore } from '@/store/modules/userStore';
import { type FormProps, MessagePlugin } from 'tdesign-vue-next';
import { useRouter } from 'vue-router';

const formData: user = reactive({
    username: 'admin',
    password: '123456'
});

const rules = {
    username: [{ required: true, message: '请您输入账户名', type: 'error' }],
    password: [{ required: true, message: '请您输入密码', type: 'error' }],
};

const loading = ref<boolean>(false);
const router = useRouter();
const store: any = useUserStore();

const handleLogin: FormProps['onSubmit'] = async ({ validateResult }) => {
    if (validateResult === true) {
        loading.value = true;
        try {
            const res = await store.login(formData);
            if (res !== false) {
                MessagePlugin.success({ content: `欢迎用户：${useUserStore().username}`, duration: 2000 });
                await router.push('/');
            }

        } finally {
            loading.value = false;
        }
    }
}

</script>


<style lang="less" scoped>
.bg {
    width: 100vm;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
        width: 400px;
        margin-top: -100px;

        .h1 {
            text-align: center;
        }

        .form {
            margin-bottom: 26px;
        }
    }
}
</style>