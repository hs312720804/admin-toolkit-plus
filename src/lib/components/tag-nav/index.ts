import { App } from 'vue'
import CTagNav from './src/index.vue'
CTagNav.install = (app: App): void => {
  const name = CTagNav.name
  app.component(name, CTagNav)
}
export default CTagNav