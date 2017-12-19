<template>
  <div class="table">
    <!-- <thead>
      
    </thead>
    <tbody>
      <tr v-for="entry in filteredData" :key="entry.id">
        <td v-for="key in columns" :key="key.id" v-formatCellData="key">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody> -->
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.id">
          {{ column | capitalize | trimUnderscore }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in searchColumns" :key="entry.id">
        <td v-for="key in columns" :key="key.id" v-formatCellData="key">
          {{ entry[key] }}
        </td>
      </tr>   
    </tbody>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: "Table",
 
  computed: {
    ...mapState([
      'searchTerm',
      'apiTableData'
    ]),
    ...mapGetters([
      'searchTableData'
    ]),
    columns() {
      return [
        "rank",
        "name",
        "price_usd",
        "percent_change_24h",
        "market_cap_usd",
        "24h_volume_usd",
        "available_supply"
      ]
    },
    searchColumns() {
      var search = this.apiTableData;
 
      if (!search) {
        return search
      } else {
        return search.filter(val => {
          return val.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
      }
    }
  }

  // props: ["data", "columns"],
  // data() {

  //   var sortOrders = {};
    
  //   this.columns.forEach(element => {
  //    sortOrders[element] = 1;
  //   });

  //   return {
  //     sortKey: '',
  //     sortOrders,
  //     onClickSort: false
  //   }
  // },
  // methods: {
  //   sortBy(key) {
  //     this.sortKey = key;
  //     this.sortOrders[key] = this.sortOrders[key] * -1; 

  //     this.onClickSort = !this.onClickSort;
  //   }
  // },
  // computed: {
  //   filteredData() {
  //     var key = this.sortKey;
  //     var data = this.data;
  //     var order = this.sortOrders[key] || 1;

  //     if (this.onClickSort) {
  //         data = data.slice().sort((a, b) => {
          
  //         a = parseInt(a[key], 10)
  //         b = parseInt(b[key], 10)

  //         return (a === b ? 0 : a > b 
  //                                   ? 1 : -1 ) * order

  //       })
  //     }

  //     return data;
  //   }
  // }
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
