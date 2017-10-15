<template>
  <div id="Hi">
      <h1>{{message}}</h1>
      <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name: "Hi",
        data () {
           return {
               message: "Hi I am baixue"
           }
        }
    }
</script>
<style scoped>

</style>

