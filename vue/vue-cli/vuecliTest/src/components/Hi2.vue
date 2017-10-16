<template>
  <div id="hi2">
      <h1>{{showMsg}}</h1>
      <p>{{$route.nameId}}</p>
  </div>
</template>
<script>
    export default {
        name: "hi2",
        data () {
            return {
                showMsg: "Hi I am Hi页面2"
            }
        }
    }
</script>
<style scoped>

</style>
