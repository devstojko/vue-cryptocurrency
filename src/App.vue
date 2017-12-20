<template>
  <div class="app">
    <app-header></app-header>
    <app-search></app-search>
    <app-table></app-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import Header from '@/components/Header';
  import Search from '@/components/Search';
  import Table from '@/components/Table';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-search': Search,
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
  mounted() {
    this.$store.dispatch('LOAD_API_DATA')
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
