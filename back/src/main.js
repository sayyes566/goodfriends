import Vue from 'vue'
//import './plugins/bootstrap-vue'
import App from './App.vue'
//import { BootstrapVue } from 'bootstrap-vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./plugins/bootstrap-vue";

Vue.config.productionTip = false

new Vue({
  // created() {
  //   const html = document.documentElement // returns the html tag
  //   html.setAttribute('lang', 'zh-tw')
  // },
  render: h => h(App),
}).$mount('#app')
//Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);
