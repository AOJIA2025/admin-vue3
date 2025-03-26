# admin-vue3

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
测试环境
npm run serve:dev
```

```sh
生产环境
npm run serve:prod
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```sh
src/
├── api/                        # API 请求
│   ├── modules/                # 按模块划分的 API
│   ├── index.js                # API 统一导出
│   └── request.js              # Axios 封装
├── assets/                     # 静态资源
│   ├── icons/                  # SVG 图标
│   ├── images/                 # 图片资源
│   └── styles/                 # 全局样式
├── components/                 # 公共组件
│   ├── common/                 # 全局通用组件
│   ├── layout/                 # 布局相关组件
│   └── business/               # 业务相关公共组件
├── composables/                # 组合式函数
│   ├── usePermission.js        # 权限相关逻辑
│   └── useUser.js              # 用户相关逻辑
├── directives/                 # 自定义指令
│   └── permission.js           # 权限指令
├── router/                     # 路由配置
│   ├── modules/                # 路由模块拆分
│   ├── guard/                  # 路由守卫
│   ├── index.js                # 路由入口
│   └── routes.js               # 基础路由
├── store/                      # 状态管理
│   ├── modules/                # Vuex 模块或 Pinia store
│   │   ├── permission.js       # 权限模块
│   │   └── user.js             # 用户模块
│   └── index.js                # store 入口
├── utils/                      # 工具函数
│   ├── auth.js                 # 认证相关
│   ├── permission.js           # 权限工具
│   └── ...                     # 其他工具
├── views/                      # 页面组件
│   ├── login/                  # 登录页
│   ├── dashboard/              # 首页
│   ├── error/                  # 错误页
│   └── ...                     # 其他业务模块
├── App.vue                     # 根组件
├── main.js                     # 应用入口
└── permission.js               # 全局权限控制
```