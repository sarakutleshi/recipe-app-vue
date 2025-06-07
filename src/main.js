import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import {createPinia} from "pinia";
import './assets/main.css'


createApp(App)
    .use(createPinia()) // use the pinia store
    .use(router) // use the router
    .mount("#app");


