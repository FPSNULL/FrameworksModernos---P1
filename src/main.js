import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.use(pinia).mount('#app')