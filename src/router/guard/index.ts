import NProgress from 'nprogress' // progress bar
import { setRouteEmitter } from '@/utils/route-listener'
import { setupPermissionGuard } from './permission'
import type { Router } from 'vue-router'

function setupPageGuard(router: Router) {
  router.beforeEach(async (to) => {
    // emit route change
    setRouteEmitter(to)
  })
}

function setupProgressGuard(router: Router) {
  router.beforeEach(async () => {
    NProgress.start()
  })
  router.afterEach(async () => {
    NProgress.done()
  })
}

export default function createRouterGuard(router: Router) {
  setupPageGuard(router)
  setupProgressGuard(router)
  setupPermissionGuard(router)
}
