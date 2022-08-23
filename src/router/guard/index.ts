import type { Router } from 'vue-router'
import { setupPermissionGuard } from './permission'

export default function createRouterGuard(router: Router) {
  setupPermissionGuard(router)
}
