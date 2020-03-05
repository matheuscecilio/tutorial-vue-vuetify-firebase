import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './routes';
import { store } from './store';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
