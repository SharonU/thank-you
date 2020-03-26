import Login from "../components/Login"
import Main from "../components/Main"
import AppLayout from "../components/AppLayout"

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: AppLayout,
            children: [{
                component: Main,
                path: '/main'
            }]
        }
    ]
})

export default router;