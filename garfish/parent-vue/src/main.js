import Vue from "vue";
import App from "./App.vue";
import "./garfish/index";

import router from "./routers/index";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
