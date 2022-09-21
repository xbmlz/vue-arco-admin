import { defineStore } from 'pinia'
import MenuApi from '@/api/sys/menu/index'
import { appRoutes } from '@/router/routes'
import type { PermissionState } from './types'
import type { RouteRecordNormalized } from 'vue-router'

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
        routes = await MenuApi.getMenuList()
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
