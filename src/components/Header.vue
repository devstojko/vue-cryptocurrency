<template>
  <div class="header">
    <div class="stats">
      <ul>
        <li>Cryptocurrencies: </li>
        <li>Markets: </li>
      </ul>
      <ul>
        <li>Market Cap: </li>
        <li>24h Vol: </li>
        <li>BTC Dominance: </li>
      </ul>
      <ul>
        <li>english</li>
        <li>USD</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
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

