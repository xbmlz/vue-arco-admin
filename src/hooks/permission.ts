import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export default function usePermission() {
  const userStore = useUserStore()
  return {
    accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
      return (
        !route.meta?.requiresAuth ||
        !route.meta?.roles ||
        // @ts-ignore
        route.meta?.roles?.includes('*') ||
        // @ts-ignore
        route.meta?.roles?.includes(userStore.role)
      )
    },
  }
}
