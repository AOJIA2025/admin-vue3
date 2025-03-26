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
}

export default new userService();