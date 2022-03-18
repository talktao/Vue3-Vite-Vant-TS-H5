import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
   {
        path: '/',
        name: 'Index',
        component: () => import ('@/layout/index.vue'),
        redirect: '/home',
        meta: {
            title: '首页',
            keepAlive:false
        },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/home/Home.vue')
            },
            {
                path: '/category',
                name: 'Category',
                component: () => import('@/views/category/Category.vue')
            },
            {
                path: '/welfare',
                name: 'Welfare',
                component: () => import('@/views/welfare/Welfare.vue')
            },
            {
                path: '/orders',
                name: 'Orders',
                component: () => import('@/views/orders/Orders.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/about/About.vue')
            },
            {
                path: '/orders',
                name: 'Orders',
                component: () => import('@/views/order/Orders.vue')
            },
            {
                path: '/detail/:id',
                name: 'Detail',
                component: () => import('@/views/Detail.vue')
            }
        ]
    },    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
