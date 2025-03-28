import type { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: '/info/permission',
        method: 'post',
        timeout: 1000,
        response: ({ body }) => {
            if (body.roles === 'admin' || body.roles === 'workers') {
                return {
                    code: '000000',
                    message: 'success',
                    data: [
                        {
                            "path": '/',
                            "name": 'Layout',
                            "component": "layout",
                            "redirect": '/dashboard',
                            "meta": {
                                "requiresAuth": true,
                                "title": '仪表盘',
                                "icon": "dashboard",
                                "permissions": ['admin', 'workers']
                            },
                            "children": [
                                {
                                    "path": "dashboard",
                                    "name": "Dashboard",
                                    "component": "/dashboard/dashboard",
                                    "meta": {
                                        "requiresAuth": true,
                                        "title": "仪表盘",
                                        "permissions": ['admin', 'workers']
                                    }
                                },
                            ]
                        },
                        {
                            "path": "/demand",
                            "name": "Demand",
                            "component": "layout",
                            "redirect": '/demand/demand-query',
                            "meta": {
                                "requiresAuth": true,
                                "title": "需求管理",
                                "icon": "chart-scatter",
                                "permissions": ['admin', 'workers']
                            },
                            "children": [
                                {
                                    "path": "demand-query",
                                    "name": "Demand-Query",
                                    "component": "/demand/demand-query",
                                    "meta": {
                                        "requiresAuth": true,
                                        "title": "需求查看",
                                        "permissions": ['admin', 'workers']
                                    }
                                },
                                {
                                    "path": "historical-demand",
                                    "name": "Historical-Demand",
                                    "component": "/demand/historical-demand",
                                    "meta": {
                                        "requiresAuth": true,
                                        "title": "历史需求",
                                        "permissions": ['admin']
                                    }
                                }
                            ]
                        },
                        {
                            "path": "/system",
                            "name": "System",
                            "component": "layout",
                            "redirect": '/system/modify-information',
                            "meta": {
                                "requiresAuth": true,
                                "title": "系统设置",
                                "icon": "setting-1",
                                "permissions": ['admin', 'workers']
                            },
                            "children": [
                                {
                                    "path": "modify-information",
                                    "name": "Modify-Information",
                                    "component": "/system/modify-information",
                                    "meta": {
                                        "requiresAuth": true,
                                        "title": "信息修改",
                                        "permissions": ['admin', 'workers']
                                    }
                                },
                                {
                                    "path": "user-management",
                                    "name": "User-Management",
                                    "component": "/system/user-management",
                                    "meta": {
                                        "requiresAuth": true,
                                        "title": "用户管理",
                                        "permissions": ['admin']
                                    }
                                }
                            ]
                        }
                    ]
                }
            }

            return {
                code: '999998',
                message: '未找到权限'
            }
        }
    }
] as MockMethod[]