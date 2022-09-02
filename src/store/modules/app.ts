import { defineStore } from 'pinia'
import appSettings from '@/settings'
import store from '@/store'

interface AppState {
  serverMenu: boolean
  siderWidth: number
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    ...appSettings,
  }),
  getters: {

  },
  actions: {

  },
})

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
