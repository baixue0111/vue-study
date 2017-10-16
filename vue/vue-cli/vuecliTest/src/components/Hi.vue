<template>
  <div id="Hi">
      <h1>{{message}}</h1>
      <p>newsId:{{$route.params.newsId}}</p>
      <p>newsTitle:{{$route.params.newsTitle}}</p>
      <button v-on:click="goback">后退</button>
      <button v-on:click="gohome">返回首页</button>
  </div>
</template>
<script>
    export default {
        name: "Hi",
        data () {
           return {
               message: " this is hi页面"
           }
        },
        beforeRouteEnter: (to, from, next) => {  // 路由配置文件中的钩子函数
            // console.log(to);  // to:路由将要跳转的路径信息，信息是包含在对像里边的。
            // console.log(from);   // from:路径跳转前的路径信息，也是一个对象的形式。
             next(true);   // next:路由的控制参数，常用的有next(true)和next(false)。
        },
        beforeRouteLeave: (to, from, next) => {
            console.log(to);
            console.log(from);
            next(true);
        },
        methods: {
            goback: function () {
                this.$router.go(-1);    
            },
            gohome: function () {
                this.$router.push("/");
            }
        }

    }
</script>
<style scoped>

</style>

