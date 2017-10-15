import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi.vue'
import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'

Vue.use(Router)  // Vue全局使用Router 

export default new Router({
  routes: [   // 配置路由，是一个数组
    {   // 每一个链接都是一个对象
      path: '/',    // 路径
      name: 'Hello',   // 路由名称
      component: HelloWorld   // 对应的组件模板
    },
    {
      path: '/hi',
      component: Hi,
      children: [
        {path: "/", component: Hi},
        {path: "hi1", component: Hi1},
        {path: "hi2", component: Hi2}
      ]
    }
  ]
})
