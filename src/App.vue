<template>
  <div class="app">
    <app-header :headerData="headerData"></app-header>
    <app-table :data="tickerData" :columns="tableColumns"></app-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import Header from '@/components/Header';
  import Table from '@/components/Table';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-table': Table
  },
  data() {
    return {
      headerData: {},
      tickerData: [],
      tableColumns: [
        "rank",
        "name",
        "price_usd",
        "percent_change_24h",
        "market_cap_usd",
        "24h_volume_usd",
        "available_supply"
      ]
    }
  },
  computed: {
    getGlobalData() {
      return axios.get('https://api.coinmarketcap.com/v1/global/');
    },
    getTickerList() {
      return axios.get('https://api.coinmarketcap.com/v1/ticker/');
    },

  },
  created() {
    axios.all([this.getGlobalData, this.getTickerList]).then(axios.spread((global, ticker) => {
     
      this.headerData = global.data;
      this.tickerData = ticker.data;

    }))
  }
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
