
import { App } from 'vue'
import CCardList from './src/index.vue'
CCardList.install = (app: App): void => {
  const name = CCardList.name
  app.component(name, CCardList)
}
export default CCardList
