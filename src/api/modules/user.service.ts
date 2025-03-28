import axios from "../request";
import type { user } from "../../types/types";

class userService {
    // 登录请求
    login(data: user) {
        return axios.post('/api/user/login', data);
    }

    // 用户信息
    info() {
        return axios.post('/api/user/info');
    }

    // 列表权限
    getPermission(data: { roles: string }) {
        return axios.post('/api/info/permission', data);
    }
}

export default new userService();