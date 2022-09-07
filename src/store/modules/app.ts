import { defineStore } from 'pinia'
import type { AppState } from '../types'
import appSettings from '@/settings'
import store from '@/store'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    ...appSettings,
  }),
  getters: {

  },
  actions: {
    // change theme
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      }
      else {
        this.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    },
    // update settings
    updateSettings(partial: Partial<AppState>) {
      this.$patch(partial)
    },
  },
})

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
