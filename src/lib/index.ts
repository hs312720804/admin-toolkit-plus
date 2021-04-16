import type { App } from 'vue'
import { InstallOptions } from '../utils/config'
import CBreadcrumb from './components/breadcrumb/index'
import CCard from './components/card/index'
import CContentWrapper from './components/content-wrapper/index'
const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}
const components = [
  CBreadcrumb,
  CCard,
  CContentWrapper
]
const install = (app: App, opt: InstallOptions): void => {
  // const option = Object.assign(defaultInstallOpt, opt)
  // locale(option.locale)
  // if (option.i18n) {
  //   i18n(option.i18n)
  // }
  // app.config.globalProperties.$ELEMENT = option
  // setConfig(option)

  components.forEach(component => {
    const name = component.name
    app.component(name, component)
  })

  // plugins.forEach(plugin => {
  //   app.use(plugin as any)
  // })
}
// install(App, InstallOptions)
export {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  install
}
export default {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  install
}