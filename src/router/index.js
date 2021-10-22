import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () =>
            import ('../views/Users.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () =>
            import ('../views/Posts.vue')
    },
    {
        path:'/Users/:id',
            name:'User',
            component:()=>import('@/views/User.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router