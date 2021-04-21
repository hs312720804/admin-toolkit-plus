import { App } from 'vue'
import CTest from './src/index.vue'
CTest.install = (app: App): void => {
  const name = CTest.name
  app.component(name, CTest)
}
export default CTest