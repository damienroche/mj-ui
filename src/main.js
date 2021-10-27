import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import PortalVue from 'portal-vue';
import App from './App.vue';
import router from './router';
import insertPlugin from './plugins/InsertPlugin.js';

Vue.use(VueCompositionAPI);
Vue.use(PortalVue);
Vue.use(insertPlugin);

Vue.config.productionTip = process.env.NODE_ENV === 'development';
window.Vue = Vue;
new Vue({
  name: 'App',
  router,
  render: h => h(App)
}).$mount('#app');
