import {
  BASE_HOME_PATH,
  LOGIN_PATH,
  NOT_FOUND_NAME,
  ROOT_PATH,
  WHITE_PATH_LIST,
} from '@/router/constants'
import { usePermissionStore, useUserStore } from '@/store'
import type { LocationQueryRaw, Router } from 'vue-router'

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    // console.log(
    //   `from====${from.path}, to====${to.path}, isLogin====${userStore.isLogin}`
    // )
    // home
    if (
      from.path === ROOT_PATH &&
      to.path === BASE_HOME_PATH &&
      userStore.homePath &&
      userStore.homePath !== BASE_HOME_PATH
    ) {
      next(userStore.homePath)
      return
    }

    // white
    if (WHITE_PATH_LIST.includes(to.path)) {
      if (to.path === LOGIN_PATH && userStore.isLogin) {
        next({
          path: userStore.homePath || BASE_HOME_PATH,
          replace: true,
        })
        return
      }
      next()
      return
    }

    // login
    if (!userStore.isLogin) {
      if (!to.meta?.requiresAuth) {
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
      return
    }

    // not found to 404
    if (
      from.path === LOGIN_PATH &&
      to.name === NOT_FOUND_NAME &&
      to.fullPath !== (userStore.homePath || BASE_HOME_PATH)
    ) {
      next(userStore.homePath || BASE_HOME_PATH)
    }

    // not found
    if (
      permissionStore.getMenuList.length === 0 &&
      !WHITE_PATH_LIST.includes(to.name)
    ) {
      permissionStore.buildRoutesAction()
    }
    // console.log(permissionStore.menuList)

    if (to.name === NOT_FOUND_NAME) {
      next({ path: to.fullPath, replace: true, query: to.query })
    } else {
      next()
    }
  })
}
