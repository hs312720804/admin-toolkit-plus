import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';
import components from '../../src/lib/index'
import * as demos from '../../src/examples/index'
import demo from './components/Demo.vue'
import lang from '../../src/lib/lang/index'
const i18n = lang.i18n
export default defineClientAppEnhance(async({ app, router, siteData }) => {
    app.use(ElementPlus, {
      i18n: i18n.global.t
    })
    app.use(i18n)
   app.component('Demo', demo)
  interface Icomponent {
    [key: string]: any
  }
 
  Object.keys(components).forEach((e) => {
    if (e !== 'install') {
        const component = (<Icomponent>components)[e]
        const name = component.name
        app.component(name, component)
    }
  })
  Object.keys(demos).forEach((e) => {
    if (e !== 'install') {
      const component = (<Icomponent>demos)[e]
      app.component(e, component)
    }
  })
})
