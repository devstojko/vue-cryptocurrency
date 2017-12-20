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
Vue.filter('trimUnderscore', val => val.replace(/_/g, ' '));
Vue.filter('capitalize', val => val[0].toUpperCase() + val.slice(1));
Vue.filter('fromNow', val => moment.unix(val).fromNow());
Vue.filter('formatPrice', val => numeral(val).format('$0,0'));
Vue.filter('formatNumber', val => numeral(val).format('0,0'));
Vue.filter('formatPercentage', val => val === undefined ? '0%' : `${val}%`);

Vue.directive('formatCellData', {
  bind(el, binding, vnode) {
    const arg = binding.value;

    const format = {
      'rank': 'default',
      'name': 'default',
      'price_usd': 'price',
      'percent_change_24h': 'percentage',
      'market_cap_usd': 'price',
      '24h_volume_usd': 'price',
      'available_supply': 'number',
    };

    const formaters = {
      default: v => v,
      price: v => numeral(v).format('$0,0'),
      number: v => numeral(v).format('0,0'),
      percentage: v => v === undefined ? '0%' : `${v}%`,
     
    };

    if (arg.key === 'percent_change_24h') {
      el.style.color = parseInt(arg.val, 10) > 0 ? 'green' : 'red';
    }

    if (arg.key in format) {
      el.innerHTML = formaters[format[arg.key]](el.innerHTML);
    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
