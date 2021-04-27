import { App } from 'vue'
import CAddMulti from './src/index.vue'
CAddMulti.install = (app: App): void => {
  const name = CAddMulti.name
  app.component(name, CAddMulti)
}
export default CAddMulti