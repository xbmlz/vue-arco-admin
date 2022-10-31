import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/store'

export default function usePermission() {
  const userStore = useUserStore()
  return {
    accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
      return (
        route.meta?.ignoreAuth ||
        !route.meta?.roles ||
        route.meta?.roles?.includes('*') ||
        route.meta?.roles?.includes(userStore.role as string)
      )
    },
  }
}
