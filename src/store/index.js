import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    searchTerm: '',
    apiHeaderData: {},
    apiTableData: [],
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
  },
  getters: { 
    filteredData(state) {
      return state.apiTableData.filter(prop => prop.name.toLowerCase().includes(state.searchTerm.toLowerCase()));
    },
  },
});
