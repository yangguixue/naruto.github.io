import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import Experience from '../pages/Experience';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/experience',
      component: Experience
    }
  ]
});
