import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import notfound from '../components/404'
import silder from '../components/silder/silder'
import home from '../components/home'
import table from '../components/table'
import form from '../components/form'
import echarts from '../components/echarts'
import exit from '../components/exit'
import set from '../components/set'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: login,
            name: 'login'
        },
        {
            path: '/404',
            component: notfound,
            name: 'notfound'
        },
        {
            path: '/silder',
            component: silder,
            children: [
                // {
                //     path: '',
                //     name: 'home',
                //     component: home,
                //     meta: [],
                //     hidden: true
                // },
                {
                    path: '',
                    name: 'table',
                    component: table,
                    meta: ['导航一', 'Table']
                },
                {
                    path: '/form',
                    component: form,
                    meta: ['导航一', 'form']
                },
                {
                    path: '/echarts',
                    component: echarts,
                    meta: ['导航二', 'echarts']
                },
                {
                    path: '/exit',
                    component: exit,
                    meta: ['导航二', 'exit']
                },
                {
                    path: '/set',
                    component: set,
                    meta: ['导航三', 'set']
                }
            ]
        }
    ]
})
