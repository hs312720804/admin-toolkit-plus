
import { App } from 'vue'
import CForm from './src/index.vue'
CForm.install = (app: App): void => {
  const name = CForm.name
  app.component(name, CForm)
}
export default CForm