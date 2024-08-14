import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'

import '@/assets/styles/main.scss'
import '@/assets/styles/media.scss'

createApp(App).use(store).mount('#app')
