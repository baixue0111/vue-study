import Vue from 'vue'
import App from './App.vue'
import {store} from './vuex/store'   // 引入js文件里的一个方法得用 花括号括起来

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
