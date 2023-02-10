import { createApp } from 'vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import store from './store'
import '@arco-design/web-vue/dist/arco.css'
import 'uno.css'
import '@/styles/global.less'

const app = createApp(App)
const head = createHead()
app.use(ArcoVueIcon)
app.use(head)
app.use(router)
app.use(store)
app.mount('#app')
