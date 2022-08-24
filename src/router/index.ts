import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import type { LocationQueryRaw } from 'vue-router'
import { BASE_HOME_PATH, LOGIN_PATH, ROOT_PATH } from '@/router/constants'
import { useUserStoreWithOut } from '@/store/modules/user'

const routes = setupLayouts(generatedRoutes)
const userStore = useUserStoreWithOut()

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach(async (to, from, next) => {
  // console.log(`from ${from.path} to ${to.path}`)
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

  // if to / and is login
  if (to.path === ROOT_PATH) {
    next(userStore.getUserInfo.homePath || BASE_HOME_PATH)
    return
  }

  // if to /login and is login
  if (to.path === LOGIN_PATH) {
    next((to.query?.redirect as string) || '/')
    return
  }

  next()
})

export default router
