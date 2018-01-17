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
            path: '/login',
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
                {
                    path: '',
                    name: 'home',
                    component: home,
                    meta: []
                },
                {
                    path: '/table',
                    name: 'table',
                    component: table,
                    meta: ['table']
                },
                {
                    path: '/form',
                    component: form,
                    meta: ['form']
                },
                {
                    path: '/echarts',
                    component: echarts,
                    meta: ['echarts']
                },
                {
                    path: '/exit',
                    component: exit,
                    meta: ['exit']
                },
                {
                    path: '/set',
                    component: set,
                    meta: ['set']
                }
            ]
        }
    ]
})
