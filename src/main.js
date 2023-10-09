import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
const app = createApp(App)
getVant(app) // 引入自制插件，可以管理我们vant的模块
app.use(store)
app.use(router).mount('#app')
