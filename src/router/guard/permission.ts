import NProgress from 'nprogress' // progress bar
import { LOGIN_PATH } from '@/router/constants'
import { usePermissionStore, useUserStore } from '@/store'
import type { LocationQueryRaw, Router } from 'vue-router'

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    NProgress.start()
    // 判断是否登录
    if (userStore.userToken) {
      if (userStore.role) {
        next()
      } else {
        try {
          await userStore.userInfoAction()
          next()
        } catch (error) {
          console.error(error)
          await userStore.logout()
          next({
            path: LOGIN_PATH,
            replace: true,
            query: {
              ...(to.query as LocationQueryRaw),
            },
          })
        }
      }
    } else {
      // TODO logout
      if (to.path === LOGIN_PATH) {
        next()
        return
      }
      next({
        path: LOGIN_PATH,
        replace: true,
        query: {
          ...(to.query as LocationQueryRaw),
        },
      })
    }

    if (permissionStore.getMenuList.length === 0)
      permissionStore.buildRoutesAction()

    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
