import Login from "../components/Login"

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: 'login',
    component: Login
}]

export default new VueRouter({
    routes
})