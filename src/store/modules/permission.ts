import { defineStore } from 'pinia'
import type { RouteRecordNormalized } from 'vue-router'
import UserApi from '@/api/system/user/index'
import { appRoutes } from '@/router/routes'
import { useAppStore } from '@/store'

interface PermissionState {
  menuList: RouteRecordNormalized[]
}

export const usePermissionStore = defineStore({
  id: 'permission',
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
    async buildRoutes() {
      const appStore = useAppStore()
      let routes: RouteRecordNormalized[] = []
      if (appStore.serverMenu) {
        routes = await UserApi.getUserMenu()
      } else {
        routes = appRoutes
      }
      this.setMenuList(routes)
    },
    clearMenuList() {
      this.menuList = []
    },
  },
})
