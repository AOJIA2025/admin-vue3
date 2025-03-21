import axios, { type AxiosInstance } from "axios";
import env from "@/config/env";
import { MessagePlugin } from 'tdesign-vue-next';
import { useUserStore } from "@/store/modules/userStore";
import router from "@/router/router";

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: env.apiUrl, // 请求地址
    timeout: 60000, // 请求超时时间
    headers: { // 请求头
        'Content-Type': 'application/json',
    }
});

// 请求拦截器
instance.interceptors.request.use((config) => {
    const store = useUserStore();
    // 在发送请求之前做一些处理，比如添加 token
    if (config.data === undefined) {
        config.data = {
            token: store.token,
        };
    } else {
        config.data.token = store.token;
    }

    // token 失效 返回登录页
    if (config.url !== 'api/user/login' && store.token) {
        router.push('/login');
    }

    return config;
}, (error) => {
    // 请求错误处理
    return MessagePlugin('error', { content: error, duration: 4000 });
})

// 响应拦截器
instance.interceptors.response.use((response) => {
    if (response.data?.code === '000000') {
        return response.data;
    }
    return MessagePlugin('error', { content: response.data?.message, duration: 4000 });
}, (error => {
    // 响应错误处理
    return MessagePlugin('error', { content: error, duration: 4000 });
}))

export default instance;