import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import { DEFAULT_ROUTE, DEFAULT_ROUTE_NAME, REDIRECT_ROUTE_NAME } from '@/router/constants'
import { isString } from '@/utils/is'
import { useAppStore } from '@/store'

const BAN_LIST = [REDIRECT_ROUTE_NAME]

export interface TabProps {
  title: string
  name: string
  fullPath: string
  query?: any
  cache?: boolean
}

interface TabsState {
  tabList: TabProps[]
  tabCacheList: Set<string>
}

const formatTag = (route: RouteLocationNormalized): TabProps => {
  const { name, meta, fullPath, query } = route
  return {
    title: meta.title || '',
    name: String(name),
    fullPath,
    query,
    cache: meta.cache,
  }
}

export const useTabsStore = defineStore({
  id: 'tabs',
  state: (): TabsState => ({
    tabList: [DEFAULT_ROUTE],
    tabCacheList: new Set([DEFAULT_ROUTE_NAME]),
  }),
  getters: {
    getTabList(): TabProps[] {
      return this.tabList
    },
    getTabCacheList(): string[] {
      return Array.from(this.tabCacheList)
    },
  },
  actions: {
    addTab(route: RouteLocationNormalized) {
      if (BAN_LIST.includes(route.name as string)) {
        return
      }
      this.tabList.push(formatTag(route))
      const appStore = useAppStore()
      if (route.meta.cache || appStore.multiTabs) {
        this.tabCacheList.add(route.name as string)
      }
    },
    deleteTab(index: number, tab: TabProps) {
      this.tabList.splice(index, 1)
      this.tabCacheList.delete(tab.name)
    },
    addTabCache(name: string) {
      if (isString(name) && name !== '') this.tabCacheList.add(name)
    },
    deleteTabCache(tab: TabProps) {
      this.tabCacheList.delete(tab.name)
    },
    refreshTabList(tabs: TabProps[]) {
      this.tabList = tabs
      this.tabCacheList.clear()
      this.tabList
        .filter((el) => el.cache)
        .map((el) => el.name)
        .forEach((el) => this.tabCacheList.add(el))
    },
    resetTabList() {
      this.tabList = [DEFAULT_ROUTE]
      this.tabCacheList.clear()
      this.tabCacheList.add(DEFAULT_ROUTE_NAME)
    },
  },
})
