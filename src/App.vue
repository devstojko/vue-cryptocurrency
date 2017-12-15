<template>
  <div class="app">
    <app-header :headerData="headerData"></app-header>
    <app-table :tickerData="tickerData"></app-table>
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
      tickerData: []
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
