import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import silder from '../components/silder/silder'
import home from '../components/home'
import page1 from '../components/page1'
import page2 from '../components/page2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: login,
            name: 'login'
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
                    path: '/page1',
                    name: 'page1',
                    component: page1,
                    meta: ['选项一']
                },
                {
                    path: '/page2',
                    component: page2,
                    meta: ['选项二']
                }
            ]
        }
    ]
})
