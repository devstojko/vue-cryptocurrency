<template>
  <div class="app">
    <app-header></app-header>
  </div>
</template>

<script>
  import Header from '@/components/Header';

export default {
  name: 'app',
  components: {
    'app-header': Header
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
