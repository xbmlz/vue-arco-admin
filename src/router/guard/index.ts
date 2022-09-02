import type { Router } from 'vue-router'
import { setupPermissionGuard } from './permission'
import { setRouteEmitter } from '@/utils/route-listener'

function setupPageGuard(router: Router) {
  router.beforeEach(async (to) => {
    // emit route change
    setRouteEmitter(to)
  })
}

export default function createRouterGuard(router: Router) {
  setupPageGuard(router)
  setupPermissionGuard(router)
}
