import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import { appRoutes } from './routes'
import createRouterGuard from './guard'
import 'nprogress/nprogress.css'
import { LOGIN_ROUTE, NOT_FOUND_ROUTE, REDIRECT_ROUTE, ROOT_ROUTE } from './routes/basic'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [LOGIN_ROUTE, ROOT_ROUTE, ...appRoutes, REDIRECT_ROUTE, NOT_FOUND_ROUTE],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// set router guard
createRouterGuard(router)

export default router
