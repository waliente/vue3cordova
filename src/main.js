import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

document.addEventListener("deviceready", () => {}, false);

createApp(App)
  .use(store)
  .use(router)
  .provide("$cordova", window.cordova)
  .mount("#app");
