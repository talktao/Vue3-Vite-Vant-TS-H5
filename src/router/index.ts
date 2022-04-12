import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 通过Vite的import.meta.glob()方法实现自动化导入路由
const mainRouterModules = import.meta.glob('../layout/*.vue')
const viewRouterModules = import.meta.glob('../views/**/*.vue')

// 子路由
const childRoutes = Object.keys(viewRouterModules).map((path)=>{	
	const childName = path.match(/\.\.\/views\/(.*)\.vue$/)[1].split('/')[1];
	return {
		path: `/${childName.toLowerCase()}`,
		name: childName,
		component: viewRouterModules[path]
	} 
})

// 根路由
const rootRoutes = Object.keys(mainRouterModules).map((path) => {
    const name = path.match(/\.\.\/layout\/(.*)\.vue$/)[1].toLowerCase();
    const routePath = `/${name}`;
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

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router







