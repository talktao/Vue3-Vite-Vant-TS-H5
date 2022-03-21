import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const mainRouterModules = import.meta.glob('../layout/*.vue')
console.log(mainRouterModules,'mainRouterModules');

const viewRouterModules = import.meta.glob('../views/**/*.vue')
console.log(viewRouterModules,'viewRouterModules');


// 子路由
const childRoutes = Object.keys(viewRouterModules).map((path)=>{
  const childName = path.match(/\.\.\/views\/(.*)\.vue$/)[1].split('/')[1];
  return {
      path: `/${childName.toLowerCase()}`,
      name: childName,
      component: viewRouterModules[path]
  } 
})

console.log(childRoutes,'childRouter');

// 根路由
const rootRoutes = Object.keys(mainRouterModules).map((path) => {
    const name = path.match(/\.\.\/layout\/(.*)\.vue$/)[1].toLowerCase();
    console.log(name,'name');
    const routePath = `/${name}`;
    console.log(routePath,'routePath');
    if (routePath === '/index') {
      return {
        path: '/',
        name,
        redirect: '/home',
        component: mainRouterModules[path],
        children: childRoutes
      };
    }
})



const routes: Array<RouteRecordRaw> = rootRoutes


// const routes: Array<RouteRecordRaw> = [
//    {
//         path: '/',
//         name: 'Index',
//         component: () => import ('@/layout/index.vue'),
//         redirect: '/home',
//         meta: {
//             title: '首页',
//             keepAlive:false
//         },
//         children: [
//             {
//                 path: '/home',
//                 name: 'Home',
//                 component: () => import('@/views/home/Home.vue')
//             },
//             {
//                 path: '/category',
//                 name: 'Category',
//                 component: () => import('@/views/category/Category.vue')
//             },
//             {
//                 path: '/welfare',
//                 name: 'Welfare',
//                 component: () => import('@/views/welfare/Welfare.vue')
//             },
//             {
//                 path: '/orders',
//                 name: 'Orders',
//                 component: () => import('@/views/orders/Orders.vue')
//             },
//             {
//                 path: '/about',
//                 name: 'About',
//                 component: () => import('@/views/about/About.vue')
//             },
//             {
//                 path: '/orders',
//                 name: 'Orders',
//                 component: () => import('@/views/order/Orders.vue')
//             },
//             {
//                 path: '/detail/:id',
//                 name: 'Detail',
//                 component: () => import('@/views/home/Detail.vue')
//             }
//         ]
//     },    
// ]

console.log(routes,'routes');


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
