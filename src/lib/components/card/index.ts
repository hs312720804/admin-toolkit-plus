import { App } from 'vue'
import CCard from './src/index.vue'
CCard.install = (app: App): void => {
  const name = CCard.name
  app.component(name, CCard)
}
export default CCard