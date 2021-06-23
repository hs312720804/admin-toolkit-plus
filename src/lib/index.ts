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
import CAddMulti from './components/add-multi/index'
import CTagNav from './components/tag-nav/index'
import CCardList from './components/card-list/index'
import CForm from './form/form/index'
import CFormAny from './form/any/index'
import CUpload from './components/upload/index'
import CFormBoolean from './form/boolean/index'
import CFormString from './form/string/index'
import CFormNumber from './form/number/index'
import CFormEnum from './form/enum/index'
import CFormEnumList from './form/enum-list/index'
import CFormMac from './form/mac/index'
import CFormEffectiveTime from './form/effective-time/index'
import CSelectLimit from './components/select-limit/index'
import CBoxGroup from './components/box-group/index'
import CTreeSelect from './components/tree-select/index'
import CSearchDropdown from './components/search-dropdown/index'
import CCascaderPanel from './components/cascader-panel/index'
import CCellEdit from './components/cell-edit/index'
import CContextMenu from './components/context-menu/index'
import CDownload from './components/download/index'
import CEllipsis from './components/ellipsis/index'
import CFilterTree from './components/filter-tree/index'
import CFixPage from './components/fix-page/index'
import CIconSelect from './components/icon-select/index'
import CInputOrder from './components/input-order/index'
import CInputPositiveInt from './components/input-positive-int/index'
import CInputPosibility from './components/input-posibility/index'
import CInputThousands from './components/input-thousands/index'
import CAppParams from './bizComponents/app-params/index'
import CAppParamsRead from './bizComponents/app-params-read/index'
import CLazyRemoteSelect from './components/lazy-remote-select/index'
import CSelectChange from './components/select-change/index'
import CTableTree from './components/table-tree/index'
import CListFilter from './components/list-filter/index'
import utils from './utils'
const i18n = lang.i18n

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}
const components = [
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CTable,
  CMenu,
  CActionList,
  CAddFormObj,
  CAddMulti,
  CTagNav,
  CCardList,
  CForm,
  CFormAny,
  CUpload,
  CFormBoolean,
  CFormString,
  CFormNumber,
  CFormEnum,
  CFormEnumList,
  CFormMac,
  CFormEffectiveTime,
  CSelectLimit,
  CBoxGroup,
  CTreeSelect,
  CSearchDropdown,
  CCascaderPanel,
  CCellEdit,
  CContextMenu,
  CDownload,
  CEllipsis,
  CFilterTree,
  CFixPage,
  CIconSelect,
  CInputOrder,
  CInputPositiveInt,
  CInputPosibility,
  CInputThousands,
  CAppParams,
  CAppParamsRead,
  CLazyRemoteSelect,
  CSelectChange,
  CTableTree,
  CListFilter
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
  CAddMulti,
  install,
  utils,
  CTagNav,
  CCardList,
  CForm,
  CFormAny,
  CUpload,
  CFormBoolean,
  CFormString,
  CFormNumber,
  CFormEnum,
  CFormEnumList,
  CFormMac,
  CFormEffectiveTime,
  CSelectLimit,
  CBoxGroup,
  CTreeSelect,
  CSearchDropdown,
  CCascaderPanel,
  CCellEdit,
  CContextMenu,
  CDownload,
  CEllipsis,
  CFilterTree,
  CFixPage,
  CIconSelect,
  CInputOrder,
  CInputPositiveInt,
  CInputPosibility,
  CInputThousands,
  CAppParams,
  CAppParamsRead,
  CLazyRemoteSelect,
  CSelectChange,
  CTableTree,
  CListFilter
}
export default {
  CBreadcrumb,
  CCard,
  CContentWrapper,
  CTable,
  CMenu,
  CActionList,
  CAddFormObj,
  CAddMulti,
  install,
  utils,
  CTagNav,
  CCardList,
  CForm,
  CFormAny,
  CUpload,
  CFormBoolean,
  CFormString,
  CFormNumber,
  CFormEnum,
  CFormEnumList,
  CFormMac,
  CFormEffectiveTime,
  CSelectLimit,
  CBoxGroup,
  CTreeSelect,
  CSearchDropdown,
  CCascaderPanel,
  CCellEdit,
  CContextMenu,
  CDownload,
  CEllipsis,
  CFilterTree,
  CFixPage,
  CIconSelect,
  CInputOrder,
  CInputPositiveInt,
  CInputPosibility,
  CInputThousands,
  CAppParams,
  CAppParamsRead,
  CLazyRemoteSelect,
  CSelectChange,
  CTableTree,
  CListFilter
}