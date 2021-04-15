import Vue from "vue";

import App from "./App.vue";

import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;


window.vm = new Vue({
  render: (h) => h(App),
}).$mount("#app");