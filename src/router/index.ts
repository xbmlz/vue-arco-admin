import { createRouter, createWebHistory } from 'vue-router'

// 创建一个路由实例
const router = createRouter({
	// 创建一个hash历史记录
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: 'login'
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/sys/login/index.vue')
		}
	],
	scrollBehavior() {
		return { top: 0, left: 0 }
	}
})

export default router
