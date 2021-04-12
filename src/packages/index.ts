import type { App } from 'vue'
import { InstallOptions } from '../utils/config'
import cTest from './components/test/index'
const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}
const components = [
  cTest
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
    app.component(component.name, component)
  })

  // plugins.forEach(plugin => {
  //   app.use(plugin as any)
  // })
}
// install(App, InstallOptions)
export {
  cTest,
  install
}
export default {
  cTest,
  install
}