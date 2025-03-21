import { createApp } from 'vue';
import App from './App.vue';

// 引入router
import router from './router/router';
// 引入 TDesign
import TDesign from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
// 重置样式，统一浏览器默认样式
import 'tdesign-vue-next/dist/reset.css';
// 引入icon
import TDesignIcons from 'tdesign-icons-vue-next';
// 引入pina
import pinia from './store';

const app = createApp(App);
app.use(router);
app.use(TDesign);
app.use(TDesignIcons);
app.use(pinia);
app.mount('#app');