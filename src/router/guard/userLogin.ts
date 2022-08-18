import type { LocationQueryRaw, Router } from 'vue-router'

export default function setupUserLoginGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    if (userStore.getToken) {
      next()
    }
    else {
      if (to.name === 'Login') {
        next()
        return
      }
      next({
        name: 'Login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      })
    }
  })
}
