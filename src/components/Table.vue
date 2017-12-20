<template>
  <div v-if="filteredData.length === 0">No search results</div>
  <div class="table" v-else>
    <table>
      <thead>
      <tr>
        <th 
          v-for="column in columns"
          :key="column.id"
          @click="sortBy(column)"
          :class="{active: sortByKey[column] !== 1 }"
        >
          {{ column | capitalize | trimUnderscore }}  
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData" :key="entry.id">   
        <template v-for="key in columns">
          <td :key="key.id" v-formatCellData="{val: entry[key], key: key}"> 
            <icon v-if="key === 'name' " :class="`s-s-${entry.id}`"></icon>
            {{ entry[key] }}
          </td>
        </template>
      </tr>   
    </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import _ from 'lodash';
import Icon from '@/components/Icon';

export default {
  name: "Table",
  components: { 'icon': Icon },
  computed: {
    ...mapState([
      'searchTerm',
      'apiTableData',
      'sortByKey'
    ]),
    ...mapGetters([
      'filteredData'
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
  },
  methods: {
    sortBy(key) {
      this.$store.commit('sortBy', key);
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
  .table, th, td {
    padding: 5px;
    border: 1px solid black;
  }

  .table th {
    cursor: pointer;
    color: darkslategray;
    transition: .3s ease;
  }

  .table th.active {
    color: white;
    background-color: lightslategray;
  }

  .table th:after {
    content: '↑'
  }

  .table th.active:after {
    content: '↓'
  }

</style>
