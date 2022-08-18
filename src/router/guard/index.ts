import type { Router } from 'vue-router'
import setupUserLoginGuard from './userLogin'

export default function createRouterGuard(router: Router) {
  setupUserLoginGuard(router)
}
