import { App } from 'vue'
import CSelectLimit from './src/SelectLimit.vue'
CSelectLimit.install = (app: App): void => {
  const name = CSelectLimit.name
  app.component(name, CSelectLimit)
}

export default CSelectLimit