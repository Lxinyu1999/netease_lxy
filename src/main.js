import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import getVant from "./plugins";
const app = createApp(App);
getVant(app); // 引入自制插件列表函数，输入app对象，返回app(item) for item in List[Button,Swiper...]
app.use(store); // 使用vuex
app.use(router).mount("#app"); // 使用vue-router
