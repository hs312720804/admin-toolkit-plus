import type { App } from 'vue'
import { createApp } from 'vue'
import { InstallOptions } from '../utils/config'
import lang from './lang/index'
import CBreadcrumb from './components/breadcrumb/index'
import CTable from './components/table/index'
import CCard from './components/card/index'
import CMenu from './components/menu/index'
import CActionList from './components/action-list/index'
import CContentWrapper from './components/content-wrapper/index'
import CAddFormObj from './components/add-form-obj/index'
const i18n = lang.i18n

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}
const components = [
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CMenu,
  CActionList,
  CAddFormObj
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
  CTable,
  CMenu,
  CActionList,
  CAddFormObj,
  install
}
export default {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CTable,
  CMenu,
  CActionList,
  CAddFormObj,
  install
}