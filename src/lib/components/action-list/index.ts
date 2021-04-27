import { App } from 'vue'
import CActionList from './src/index.vue'
CActionList.install = (app: App): void => {
  const name = CActionList.name
  app.component(name, CActionList)
}
export default CActionList