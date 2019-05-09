import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routerConfig from './router';

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

import { GET, POST } from "@/common/axios";
Vue.prototype.GET = GET;
Vue.prototype.POST = POST;

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})