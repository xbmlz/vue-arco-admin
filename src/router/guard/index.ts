import { setRouteEmitter } from '@/utils/route-listener'
import { setupPermissionGuard } from './permission'
import type { Router } from 'vue-router'

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
