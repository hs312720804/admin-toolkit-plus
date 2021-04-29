// import CTableWrapper from './src/Index.vue'
// import install from '../../install'
// install(CTableWrapper)
// export default CTableWrapper

import { App } from 'vue'
import CTableWrapper from './src/index.vue'

CTableWrapper.install = (app: App): void => {
  const name = CTableWrapper.name
  app.component(name, CTableWrapper)
}

export default CTableWrapper
