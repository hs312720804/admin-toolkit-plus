import { App } from 'vue'
import component from './src/index.vue'
component.install = (app: App): void => {
  const name = component.name
  app.component(name, component)
}
export default component
