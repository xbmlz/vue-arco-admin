import { createPinia } from 'pinia'
import useUserStore from './modules/user'

const pinia = createPinia()

export { useUserStore }
export default pinia
