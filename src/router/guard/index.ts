import NProgress from 'nprogress' // progress bar
import type { Router } from 'vue-router'
import { setupPermissionGuard } from './permission'
import { setRouteEmitter } from '@/utils/route-listener'

function setupPageGuard(router: Router) {
  router.beforeEach((to) => {
    // emit route change
    setRouteEmitter(to)
  })
}

function setupProgressGuard(router: Router) {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}

export default function createRouterGuard(router: Router) {
  setupPageGuard(router)
  setupProgressGuard(router)
  setupPermissionGuard(router)
}
