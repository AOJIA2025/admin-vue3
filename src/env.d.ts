// 为 import.meta.env 提供类型提示
/// <reference types="vite/client" />

interface Env {
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_VERSION: string;
    readonly VITE_API_URL: string;
    readonly VITE_APP_ENV: string;
}

interface ImportMeta {
    readonly env: Env;
}