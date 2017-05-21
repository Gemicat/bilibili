import Vue from 'vue';
import App from './App';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

var vue = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

module.exports = vue;