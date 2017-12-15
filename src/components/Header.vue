<template>
  <div class="header">
    <div class="stats">
      <ul>
        <li>Cryptocurrencies: {{ headerData.active_currencies }}</li>
        <li>Markets: {{ headerData.active_markets }} </li>
      </ul>
      <ul>
        <li>Market Cap: {{ headerData.total_market_cap_usd | formatPrice }}</li>
        <li>24h Vol: {{ headerData.total_24h_volume_usd | formatPrice }}</li>
        <li>BTC Dominance: {{ headerData.bitcoin_percentage_of_market_cap | formatPercentage }}</li>
      </ul>
      <ul>
        <li>english</li>
        <li>USD</li>
        <li>Last update: {{ headerData.last_updated | fromNow }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
 import moment from 'moment';
 import numeral from 'numeral';

export default {
  name: 'Header',
  props: ['headerData'],
  filters: {
    'fromNow'(val) {
      return moment.unix(val).fromNow();
    },
    'formatPrice'(val) {
      return numeral(val).format('$0,0');
    },
    'formatPercentage'(val) {
      return val === undefined ? '0%' : val;
    }
  }
}
</script>

<style scoped>
  .header {
    max-width: 90%;
    margin: 0 auto;
    padding: 20px 40px;
    background-color: lightslategrey;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

</style>

