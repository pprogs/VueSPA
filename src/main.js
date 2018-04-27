import "babel-polyfill";

import Vue from "vue";
import store from "./store";
import router from "./route";

import loc from "./localization";
loc(store);

import Vuetify from "vuetify";
import "./main.styl";

import App from "./components/app.vue";

Vue.use(Vuetify);

import FormatPlugin from "./utils/formatPlugin"

Vue.use(FormatPlugin);

var app = new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
