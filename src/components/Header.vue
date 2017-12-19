<template>
  <div class="header">
    <div class="stats">
      <ul>
        <li>Cryptocurrencies: {{ apiHeaderData.active_currencies }}</li>
        <li>Markets: {{ apiHeaderData.active_markets }} </li>
      </ul>
      <ul>
        <li>Market Cap: {{ apiHeaderData.total_market_cap_usd | formatPrice }}</li>
        <li>24h Vol: {{ apiHeaderData.total_24h_volume_usd | formatPrice }}</li>
        <li>BTC Dominance: {{ apiHeaderData.bitcoin_percentage_of_market_cap | formatPercentage }}</li>
      </ul>
      <ul>
        <li>english</li>
        <li>USD</li>
        <li>Last update: {{ apiHeaderData.last_updated | fromNow }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
 import { mapState } from 'vuex';

  export default {
    name: 'Header',
    props: ['headerData'],
    computed: mapState([
      'apiHeaderData'
    ])
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

