<template>
  <div class="search-container">
    <input
      type="text"
      :value="searchTerm"
      placeholder="Search by name"
      @input="updateMessage"
    >
  </div>  
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: "Search",
  computed: {
    ...mapState({
      searchTerm: state => state.searchTerm
    })
  },
  methods: {
    updateMessage(e) {
      this.$store.commit('updateMessage', e.target.value);
    }
  }
}
</script>

<style scoped>
  .search-container {
    width: 50%;
    margin: 25px auto;

  }

  input {
    width: 100%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
    padding: 10px;

  }
</style>
