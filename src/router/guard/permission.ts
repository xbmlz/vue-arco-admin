import type { LocationQueryRaw, Router } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useUserStoreWithOut } from '@/store/modules/user'
import { LOGIN_PATH } from '@/router/constants'

export function setupPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut()
  const permissionStore = usePermissionStoreWithOut()

  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // 判断是否登录
    if (userStore.userToken) {
      if (userStore.role) {
        next()
      }
      else {
        try {
          await userStore.userInfoAction()
          next()
        }
        catch (error) {
          await userStore.logout()
          next({
            path: LOGIN_PATH,
            replace: true,
            query: {
              ...to.query as LocationQueryRaw,
            },
          })
        }
      }
    }
    else {
      // TODO logout
      if (to.path === LOGIN_PATH) {
        next()
        return
      }
      next({
        path: LOGIN_PATH,
        replace: true,
        query: {
          ...to.query as LocationQueryRaw,
        },
      })
    }

    if (!permissionStore.getMenuList.length)
      permissionStore.buildRoutesAction()

    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

