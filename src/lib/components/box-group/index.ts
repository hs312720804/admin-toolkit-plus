import { App } from 'vue'
import CBoxGroup from './src/BoxGroup.vue'

CBoxGroup.install = (app: App):void => {
  const name = CBoxGroup.name
  app.component(name, CBoxGroup)
}
export default CBoxGroup