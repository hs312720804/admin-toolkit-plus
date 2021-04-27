
import { App } from 'vue'
import CMenu from './src/index.vue'
CMenu.install = (app: App): void => {
  const name = CMenu.name
  app.component(name, CMenu)
}
export default CMenu