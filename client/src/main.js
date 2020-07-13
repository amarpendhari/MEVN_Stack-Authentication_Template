import Vue from "vue";
import App from "./App.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";
import store from "../src/store/index";

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export { vm };
