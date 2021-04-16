import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import lang from './lib/lang/index'
const i18n = lang.i18n
createApp(App)
.use(ElementPlus, {
  i18n: i18n.global.t
})
.use(i18n)
.mount('#app')
