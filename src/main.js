import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
//import installElementPlus from './plugins/element.js'

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);

app.mount("#app");