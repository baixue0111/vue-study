import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import silder from '../components/silder/silder'
import home from '../components/home'
import page1 from '../components/page1'

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
                    path: '/home',
                    name: 'home',
                    component: home,
                    meta: []
                },
                {
                    path: '/page1',
                    name: 'page1',
                    component: page1
                }
            ]
        }
    ]
})
