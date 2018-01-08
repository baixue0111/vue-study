<template>
  <div id="app">
    <count></count>
    <cart></cart>
  </div>
</template>

<script>
import count from './components/count';
import cart from './components/cart';
export default {
  name: 'app',
  components: {
    "count": count,
    "cart": cart
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
