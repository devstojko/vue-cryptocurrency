<template>
  <div class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Change</th>
        <th>Market Cap</th>
        <th>Volume (24h)</th>
        <th>Circulating Supply</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="ticker in tickerData" :key="ticker.id">
        <td v-text="ticker.rank"></td>
        <td>
          <span>{{ ticker.symbol }}</span>
          <p>{{ ticker.name }}</p>
        </td>
        <td>{{ ticker.price_usd | formatPrice }}</td>
        <td v-plusMinusColor="ticker.percent_change_24h">{{ `${ticker.percent_change_24h}%` }}</td>
        <td>{{ ticker.market_cap_usd | formatPrice }}</td>
        <td>{{ ticker["24h_volume_usd"] | formatPrice }}</td>
        <td>{{ ticker.total_supply | formatNumber }} {{ ticker.symbol }}</td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["tickerData"]
}
</script>

<style scoped>
  .table
  {
    border-collapse: collapse;
    border-spacing: 0px;
    margin: 20px;
  }
  .table, th, td
  {
    padding: 5px;
    border: 1px solid black;
  }

</style>
