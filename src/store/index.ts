import { createPinia } from "pinia";
// 引入 pinia 持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;