import Vue from "vue";
import VueMq from "vue-mq";
import { BootstrapVue } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "nprogress/nprogress.css";
import "./styles/styles.scss";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

//VueMq library https://www.npmjs.com/package/vue-mq
Vue.use(VueMq, {
  breakpoints: {
    xsmall: 576,
    small: 768,
    meduim: 992,
    large: 1200,
    xlarge: Infinity
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
