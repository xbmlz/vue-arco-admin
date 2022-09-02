import type { LocationQueryRaw, Router } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useUserStoreWithOut } from '@/store/modules/user'
import { BASE_HOME_PATH, LOGIN_PATH, ROOT_PATH } from '@/router/constants'

export function setupPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut()
  const permissionStore = usePermissionStoreWithOut()

  router.beforeEach(async (to, from, next) => {
    NProgress.start()

    if (!permissionStore.getMenuList.length)
      permissionStore.buildRoutesAction()

    // from / to next
    if (from.path === ROOT_PATH
      && to.path === BASE_HOME_PATH
      && userStore.getUserInfo.homePath
      && userStore.getUserInfo.homePath !== BASE_HOME_PATH) {
      next(userStore.getUserInfo.homePath)
      return
    }

    // token is does not exit
    const token = userStore.getToken
    if (!token) {
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

    // if to /login and is login
    if (to.path === LOGIN_PATH) {
      next((to.query?.redirect as string) || '/')
      return
    }

    next()
  })

  router.afterEach(() => {
    // finish progress bar
    NProgress.done()
  })
}

