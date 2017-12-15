// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import moment from 'moment';
import numeral from 'numeral';

Vue.config.productionTip = false;

// Filters

Vue.filter('fromNow', val => moment.unix(val).fromNow());
Vue.filter('formatPrice', val => numeral(val).format('$0,0'));
Vue.filter('formatNumber', val => numeral(val).format('0,0'));
Vue.filter('formatPercentage', val => val === undefined ? '0%' : `${val}%`);

// Directives
Vue.directive('plusMinusColor', {
  bind(el, binding, vnode) {
    return binding.value >= 0
      ? el.style.color = 'green'
      : el.style.color = 'red';
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
