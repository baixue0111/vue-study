import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi.vue'
import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
import Error from '@/components/Error.vue'

Vue.use(Router)  // Vue全局使用Router 

export default new Router({
  mode: 'history',   //history 去掉导航栏中得 “#”号, 默认是“hash” 就是带有“#”的
 /*  routes: [   // 配置路由，是一个数组
    {   // 每一个链接都是一个对象
      path: '/',    // 路径
      name: 'this is name 传参',   // 路由名称
      component: HelloWorld   // 对应的组件模板
    },
    {
      path: '/hi',  
      component: Hi,
      children: [
        {path: "/", component: Hi},
        {path: "hi1", component: Hi1, name: "Hi1"},
        {path: "hi2", component: Hi2}
      ]
    }
  ] */
  routes: [
    {
      path: '/',
      components: {
        //default: Hi,  // 设置默认<router-view>标签显示的组件内容
        left: Hi1,
        right: Hi2
      },
    },
    {
      path: '/hi/:newsId(\\d+)/:newsTitle',
      component: Hi,
      beforeEnter: (to, from, next) => {  // 路由配置文件中的钩子函数
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path: '/hi1',
      redirect: '/'   // 重定向，也可以传参数 redirect: '/:nameId/:sex'
    },
    {
      path: "/hi2",
      component: Hi2,
      alias: "/hi2-baixue"
    },
    {
      path: "*",
      component: Error
    }
  ]
})
