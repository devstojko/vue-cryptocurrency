<template>
  <div class="table">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.id" @click="sortBy(column)"  :class="sortOrders[column] > 0 ? 'asc' : 'dsc'">
          {{ column | capitalize | trimUnderscore }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in sortedData" :key="entry.id">
        <td v-for="key in columns" :key="key.id" v-formatCellData="key">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "Table",
  props: ["data", "columns"],
  data() {

    var sortOrders = {};
    
    this.columns.forEach(element => {
     sortOrders[element] = 1;
    });

    return {
      sortKey: '',
      sortOrders,
      onStartSort: false
    }
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1; 

      this.onStartSort = !this.onStartSort;
    }
  },
  computed: {
    sortedData() {
      var key = this.sortKey;
      var data = this.data;
      var order = this.sortOrders[key] || 1;

      if (this.onStartSort) {
          data = data.slice().sort((a, b) => {
          
          a = parseInt(a[key], 10)
          b = parseInt(b[key], 10)

          return (a === b ? 0 : a > b 
                                    ? 1 : -1 ) * order

        })
      }

      return data;
    }
  }
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

  .table th.asc:after {
    content: '↑'
  }

  .table th.dsc:after {
    content: '↓'
  }

</style>
