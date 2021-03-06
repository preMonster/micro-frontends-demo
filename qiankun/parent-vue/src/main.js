import Vue from "vue";
import App from "./App.vue";
import router from "@/routers";
import start from "@/micros";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

start();
