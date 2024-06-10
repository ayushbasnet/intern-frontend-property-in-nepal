import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueMeta from "vue-meta";
Vue.use(VueMeta);

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8000/api/V1/",
// });

// Vue.prototype.$axios = api;

Vue.config.productionTip = false;

Vue.prototype.$inlineBgImage = function (src) {
  if (src != null) {
    if (src.includes("http")) {
      return {
        backgroundImage: `url("${src}")`,
        transition: "background-image 1s ease-in-out",
      };
    } else {
      let fileExt = src.substring(src.lastIndexOf("."));
      src = src.replace("/img/", "");
      src = src.replace(fileExt, "");

      let bgImage = require(`./assets/img/${src}${fileExt}`);
      return {
        backgroundImage: `url("${bgImage}")`,
        transition: "background-image 1s ease-in-out",
      };
    }
  } else {
    return {
      background: `black`,
      transition: "background 1s ease-in-out",
    };
  }
};

router.beforeEach(function (to, from, next) {
  store.dispatch("fetchContactDetails");
  window.scrollTo(0, 0);
  next();
});

new Vue({
  router,
  store,
  vuetify,
  titleTemplate: "%s - Property In Nepal",
  render: (h) => h(App),
}).$mount("#app");
