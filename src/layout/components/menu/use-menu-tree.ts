import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import { usePermissionStore } from '@/store'

export default function useMenuTree() {
  const permissionStore = usePermissionStore()
  const { accessRouter } = useUserPermission()
  const appRoute = computed(() => {
    return permissionStore.getMenuList
  })
  const menuTree = computed(() => {
    const copyRouter = JSON.parse(JSON.stringify(appRoute.value))
    // 排序
    copyRouter.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
      return (Number(a.meta?.order) || 0) - (Number(b.meta?.order) || 0)
    })
    function travel(_routes: RouteRecordRaw[], layer: number) {
      if (!_routes) return null

      const collector: any = _routes.map((element) => {
        // no access
        if (!accessRouter(element)) return null

        // leaf node
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = []
          return element
        }

        // route filter hideInMenu true
        element.children = element.children.filter((x) => x.meta?.hideInMenu !== true)

        // Associated child node
        const subItem = travel(element.children, layer + 1)

        if (subItem.length > 0) {
          element.children = subItem
          return element
        }
        // the else logic
        if (layer > 1) {
          element.children = subItem
          return element
        }

        if (element.meta?.hideInMenu === false) return element

        return null
      })
      return collector.filter(Boolean)
    }
    return travel(copyRouter, 0)
  })

  return {
    menuTree,
  }
}
