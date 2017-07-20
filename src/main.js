import Vue from 'vue';
import App from './App';

import router from './containers/router';

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App,
  },
  router
})
