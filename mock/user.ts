import type { MockMethod } from 'vite-plugin-mock';

export default [
    { // 模拟登录接口
        url: '/user/login', // 模拟接口路径
        method: 'post', // 请求方法
        timeout: 1000, // 模拟延迟
        response: ({ body }) => {

            if (body.username === 'admin' && body.password === '123456') {
                // 返回数据
                return {
                    code: '000000',
                    message: 'success',
                    token: 'xxxxxxxxxx',
                }
            } else if (body.username === 'workers' && body.password === '123456') {
                return {
                    code: '000000',
                    message: 'success',
                    token: 'yyyyyyyyyy',
                }
            }

            return {
                code: '000001',
                message: '用户名或密码错误'
            }
        },
    },
    {
        // 用户信息
        url: '/user/info',
        method: 'post',
        timeout: 1000,
        response: ({ body }) => {
            if (body.token === 'xxxxxxxxxx') {
                return {
                    code: '000000',
                    message: 'success',
                    data: {
                        username: 'admin',
                        roles: 'admin'
                    }
                }
            } else if (body.token === 'yyyyyyyyyy') {
                return {
                    code: '000000',
                    message: 'success',
                    data: {
                        username: 'workers',
                        roles: 'workers'
                    }
                }
            }

            return {
                code: '999999',
                message: '未登录'
            }
        }
    }
] as MockMethod[]