import { App } from 'vue'
import CSearchDropdown from './src/SearchDropdown.vue'

CSearchDropdown.install = (app: App):void => {
  const name = CSearchDropdown.name
  app.component(name, CSearchDropdown)
}
export default CSearchDropdown
