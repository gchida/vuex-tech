import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import store from './store';

Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')
