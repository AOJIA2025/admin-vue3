import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// 引入vite mock
import { viteMockServe } from 'vite-plugin-mock';

// vite mock 配置
const viteMock = {
  mockPath: 'mock', // mock 存放的目录
  localEnabled: true, // 开发环境启用
  prodEnabled: false, // 生产环境禁用
  logger: true, // 启用日志
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根据 mode 加载对应的env文件
  const env = loadEnv(mode, process.cwd());
  console.log('当前环境：' + env.VITE_APP_ENV);

  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      viteMockServe(viteMock), // 配置 vite mock
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true, //修改请求头中的 Origin 字段为目标服务器的地址
          rewrite: (path) => path.replace(/^\/api/, ''), // 去掉路径中的 /api 前缀
        }
      }
    }
  }
})
