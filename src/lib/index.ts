import type { App } from 'vue'
import { createApp } from 'vue'
import { InstallOptions } from '../utils/config'
import lang from './lang/index'
import CBreadcrumb from './components/breadcrumb/index'
import CCard from './components/card/index'
import CMenu from './components/menu/index'
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
  CMenu
]
const install = (app: App, opt: InstallOptions): void => {
  app.use(i18n)
  components.forEach(component => {
    const name = component.name
    app.component(name, component)
  })
}
export {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CMenu,
  install
}
export default {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CMenu,
  install
}