import { createApp, h } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/icon/iconfont.css'
import '@/assets/global.styl'
import lang from './lib/lang/index'
import router from './router/index'
import components from './lib/index'
const i18n = lang.i18n
const app = createApp(App)
/**
 * 全局注册组件
 */
interface Icomponent {
  [key: string]: any
}
Object.keys(components).forEach((e) => {
  if (e !== 'install') {
    const component = (<Icomponent>components)[e]
    // const component = components[e]
    const name = component.name
    app.component(name, component)
  }
})
app.use(ElementPlus, {
  i18n: i18n.global.t
})
app.use(i18n)
app.use(router)
app.mount('#app')
