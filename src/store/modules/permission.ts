import { defineStore } from 'pinia'
import type { RouteRecordNormalized } from 'vue-router'
import { useAppStoreWithOut } from './app'
import store from '@/store'
import { appRoutes } from '@/router/routes'
import { menuListApi } from '@/api/sys/menu'

interface PermissionState {
  menuList: RouteRecordNormalized[]
}

export const usePermissionStore = defineStore('app-permission', {
  state: (): PermissionState => ({
    menuList: [],
  }),
  getters: {
    getMenuList(): RouteRecordNormalized[] {
      return this.menuList
    },
  },
  actions: {
    setMenuList(list: RouteRecordNormalized[]) {
      this.menuList = list
    },
    async buildRoutesAction() {
      const appStore = useAppStoreWithOut()
      let routes: RouteRecordNormalized[] = []
      if (appStore.serverMenu)
        routes = await menuListApi()
      else
        routes = appRoutes
      this.setMenuList(routes)
    },
  },
})

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
