import { App } from 'vue'
import CBreadcrumb from './src/index.vue'
CBreadcrumb.install = (app: App): void => {
  const name = CBreadcrumb.name
  app.component(name, CBreadcrumb)
}
export default CBreadcrumb