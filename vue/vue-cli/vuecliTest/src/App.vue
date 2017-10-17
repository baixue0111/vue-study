<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <span>导航：</span>
      <router-link to="/">首页</router-link>|
      <router-link to='/hi/222/新闻标题'>Hi页</router-link>
      <router-link to='/hi1'>Hi1页</router-link>
      <router-link to='/hi2-baixue'>Hi2页</router-link>
      <router-link to='/count'>count页</router-link>
     <!--  <router-link v-bind:to="{name:'Hi1', params: {username: 'baixue'}}">Hi页面</router-link>|
      <router-link to="/hi/hi1">Hi页面1</router-link>|
      <router-link to="/hi/hi2">Hi页面2</router-link> -->
    </div>
<!--     <p>{{$route.name}} （app.vue中用name传参所得）</p> -->
    <transition name="fade">
        <router-view></router-view> 
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: "新闻标题"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
