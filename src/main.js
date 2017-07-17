import Vue from 'vue';
import App from './App';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

import store from './store'

var vue = new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});

module.exports = vue;