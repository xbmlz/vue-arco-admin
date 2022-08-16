import { createApp } from 'vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from './router'
import 'uno.css'
import './styles/global.less'

const app = createApp(App)
app.use(ArcoVueIcon)
app.use(router)
app.mount('#app')
