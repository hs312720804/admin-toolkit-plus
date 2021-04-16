import { App } from 'vue'
import CContentWrapper from './src/index.vue'
CContentWrapper.install = (app: App): void => {
  const name = CContentWrapper.name
  app.component(name, CContentWrapper)
}
export default CContentWrapper