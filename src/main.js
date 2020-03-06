import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import firebaseConfig from './firebase-config';
import { store } from './store';
import router from './router';

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
  new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
    created() {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }    
    }
  })
  .$mount('#app');
  unsubscribe();
});
