import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端适配
import 'lib-flexible/flexible.js';

// 引入全局样式
import '@/assets/scss/index.scss';
// 全局引入按需引入UI库 vant
import { vantPlugins } from './plugins/vant.js'

//全局组件
 import components from './plugins/components.js';

// import CustomHeader from 'components/CustomHeader/CustomHeader'

createApp(App).use(store).use(router).use(vantPlugins).use(components).mount('#app')