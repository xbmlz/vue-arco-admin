import type { LocationQueryRaw, RouteRecordNormalized, Router } from 'vue-router'
import { BASE_HOME_PATH, LOGIN_PATH, NOT_FOUND_NAME, ROOT_PATH, WHITE_LIST } from '@/router/constants'
import { useAppStore, usePermissionStore, useUserStore } from '@/store'

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    const appStore = useAppStore()
    const permissionStore = usePermissionStore()
    const userPermission = useUserPermission()
    const permissionsAllow = userPermission.accessRouter(to)
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

    if (permissionStore.getMenuList.length === 0 && userStore.isLogin) {
      permissionStore.buildRoutes()
    }

    // white
    if (WHITE_LIST.some((el) => el.name === to.name)) {
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
    // TODO login
    if (!userStore.isLogin) {
      if (to.meta?.ignoreAuth) {
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
    } else {
      // eslint-disable-next-line no-lonely-if
      if (userStore.role) {
        next()
        return
      } else {
        try {
          await userStore.info()
          next()
        } catch {
          await userStore.logout()
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          })
        }
        return
      }
    }
    // permission
    if (appStore.serverMenu) {
      const asyncMenus = [...permissionStore.menuList, ...WHITE_LIST]
      let exist = false
      while (asyncMenus.length > 0 && !exist) {
        const element = asyncMenus.shift()
        if (element?.name === to.name) exist = true
        if (element?.children) {
          asyncMenus.push(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ...(element.children as unknown as RouteRecordNormalized[])
          )
        }
      }
      if (exist && permissionsAllow) {
        next()
      } else {
        next({ name: NOT_FOUND_NAME })
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (permissionsAllow) {
        next()
      } else {
        next(userStore.homePath || BASE_HOME_PATH)
      }
    }
  })
}
