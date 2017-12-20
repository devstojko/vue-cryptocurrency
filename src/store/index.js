import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    searchTerm: '',
    apiHeaderData: {},
    apiTableData: [],
    sortByKey: {
      key: '',
      rank: 1,
      name: 1,
      price_usd: 1,
      percent_change_24h: 1,
      market_cap_usd: 1,
      '24h_volume_usd': 1,
      available_supply: 1,
    },
  },
  actions: {
    LOAD_API_DATA({ commit }) {
      axios.all([
        axios.get('https://api.coinmarketcap.com/v1/global/'),
        axios.get('https://api.coinmarketcap.com/v1/ticker/'),
      ]).then(axios.spread((headerData, tableData) => {
        const data = {
          apiHeaderData: headerData.data,
          apiTableData: tableData.data,
        };

        commit('SET_API_DATA', { data });
      })).catch(e => console.log(e));
    },
  },
  mutations: {
    SET_API_DATA: (state, { data }) => {     
      state.apiHeaderData = data.apiHeaderData;
      state.apiTableData = data.apiTableData;
    },
    updateMessage(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
    sortBy(state, key) {
      state.sortByKey.key = key;
      state.sortByKey[key] = state.sortByKey[key] * -1;
    },
  },
  getters: { 
    filteredData(state) {

      var key = state.sortByKey.key;
      var order = state.sortByKey[key] || 1;

      if (key) {

        if (key === 'name') {
          return state.apiTableData.slice().sort((a, b) => {
            a = a[key];
            b = b[key];
  
            return (a === b ? 0 : a > b 
                                      ? 1 : -1 ) * order;
  
          })
        }

        return state.apiTableData.slice().sort((a, b) => {
          a = parseInt(a[key], 10);
          b = parseInt(b[key], 10);

          return (a === b ? 0 : a > b 
                                    ? 1 : -1 ) * order;

        })
        
      }

      else if (state.searchTerm) {
        return state.apiTableData.filter(prop => prop.name.toLowerCase().includes(state.searchTerm.toLowerCase()));
      } else {
        return state.apiTableData;
      }
    },
  },
});
