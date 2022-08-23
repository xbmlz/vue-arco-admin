import { defineStore } from 'pinia'
import { appStorage } from '@/utils/storage'

interface AppState {
  settings: AppSettings
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    settings: appStorage.value,
  }),
  getters: {
    getAppSettings(): AppSettings {
      return this.settings
    },
  },
  actions: {},
})

