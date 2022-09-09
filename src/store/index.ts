import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import { useUserStore } from './modules/user'
import { usePermissionStore } from './modules/permission'

const pinia = createPinia()

export {
  useAppStore,
  useUserStore,
  usePermissionStore,
}
export default pinia
