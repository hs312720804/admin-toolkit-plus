import { App } from 'vue'
import CTable from './src/Table.vue'

CTable.install = (app: App): void => {
  const name = CTable.name
  app.component(name, CTable)
}

export default CTable
