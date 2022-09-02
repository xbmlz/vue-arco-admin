import { createPinia } from 'pinia'
import { useAppStore, useAppStoreWithOut } from './modules/app'
import { useUserStore, useUserStoreWithOut } from './modules/user'
import { usePermissionStore, usePermissionStoreWithOut } from './modules/permission'

const pinia = createPinia()

export {
  useAppStore,
  useUserStore,
  usePermissionStore,
  useAppStoreWithOut,
  useUserStoreWithOut,
  usePermissionStoreWithOut,
}
export default pinia
