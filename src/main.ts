import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//#region  引入elementPlus 组件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 自动引入图标组件部分-1
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//#endregion


import App from "./App.vue";
import router from "./router";
import '@/styles/index.scss';
import "./assets/main.css";

//#region 为 pinia 添加持久化
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
//#endregion

const app = createApp(App);

//#region 自动引入图标组件部分-2
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//#endregion


app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
