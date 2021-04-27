
import { App } from 'vue'
import CAddFormObj from './src/index.vue'
CAddFormObj.install = (app: App): void => {
  const name = CAddFormObj.name
  app.component(name, CAddFormObj)
}
export default CAddFormObj
