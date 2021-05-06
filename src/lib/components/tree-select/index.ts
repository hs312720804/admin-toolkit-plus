import { App } from 'vue'
import CTreeSelect from './src/TreeSelect.vue'
CTreeSelect.install = (app: App): void => {
  const name = CTreeSelect.name
  app.component(name, CTreeSelect)
}

export default CTreeSelect
