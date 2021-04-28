
import { App } from 'vue'
import CFormAny from './src/index.vue'
CFormAny.install = (app: App): void => {
  const name = CFormAny.name
  app.component(name, CFormAny)
}
export default CFormAny