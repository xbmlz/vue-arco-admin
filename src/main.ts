import { createApp } from 'vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from './router'
import store from './store'
import '@arco-design/web-vue/dist/arco.css'
import 'uno.css'
import './styles/global.less'

const app = createApp(App)
app.use(ArcoVueIcon)
app.use(router)
app.use(store)
app.mount('#app')
