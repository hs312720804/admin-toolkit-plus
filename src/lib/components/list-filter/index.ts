
import { App } from 'vue'
import CListFilter from './src/index.vue'
CListFilter.install = (app: App): void => {
  const name = CListFilter.name
  app.component(name, CListFilter)
}
export default CListFilter