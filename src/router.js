import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home'
import MyEvents from '@/views/MyEvents'
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'
import Event from '@/views/Event'
import store from '@/store/index.js';

const routes = [
    {
        path:'/',
        name:"Home",
        component: Home
    },
    {
        path:'/my-events',
        name:"MyEvents",
        component: MyEvents
    },
    {
        path:'/sign-in',
        name:"SignIn",
        component: SignIn
    },
    {
        path:'/sign-up',
        name:"SignUp",
        component: SignUp
    },
    {
        path:'/event/:id',
        name:"Event",
        component: Event
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode:"history",
    routes,
});

export default router;