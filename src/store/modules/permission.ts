import { defineStore } from 'pinia'
import store from '@/store'

interface PermissionState {

}

export const usePermissionStore = defineStore('user-permission', {
  state: (): PermissionState => ({

  }),
  getters: {

  },
  actions: {

  },
})

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
