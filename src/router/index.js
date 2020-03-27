const Login = () =>
    import ('../components/Login');
const Main = () =>
    import ('../components/Main');
const AppLayout = () =>
    import ("../components/AppLayout");

const Offers = () =>
    import ("../components/Offers");



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
                },
                {
                    component: Offers,
                    path: '/offers'
                }
            ]
        }
    ]
})

export default router;