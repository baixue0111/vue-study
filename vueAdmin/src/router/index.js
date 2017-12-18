import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import index from '../components/index/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            component: login
        },
        {
            path: '/index',
            component: index
        }
    ]
})
