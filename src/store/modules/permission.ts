import { defineStore } from 'pinia'
import type { RouteRecordNormalized } from 'vue-router'
import type { PermissionState } from '../types'
import { appRoutes } from '@/router/routes'
import { menuListApi } from '@/api/sys/menu'
import { useAppStore } from '@/store'

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
    async buildRoutesAction() {
      const appStore = useAppStore()
      let routes: RouteRecordNormalized[] = []
      if (appStore.serverMenu)
        routes = await menuListApi()
      else
        routes = appRoutes
      this.setMenuList(routes)
    },
  },
})
