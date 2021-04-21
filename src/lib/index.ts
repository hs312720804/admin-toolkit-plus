import type { App } from 'vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { InstallOptions } from '../utils/config'
import lang from './lang/index'
import CBreadcrumb from './components/breadcrumb/index'
import CTable from './components/table/index'
import CCard from './components/card/index'
import CTest from './components/test/index'
import CContentWrapper from './components/content-wrapper/index'
const i18n = lang.i18n

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}
const components = [
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CTest,
  CTable
]
const install = (app: App, opt: InstallOptions): void => {
  // console.log('i18n=', i18n)
  // console.log('app=', app)
  // app.use(ElementPlus)
  app.use(i18n)
  components.forEach(component => {
    const name = component.name
    app.component(name, component)
  })
}
// install(App, InstallOptions)
export {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CTest,
  install
}
export default {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CTest,
  install
}