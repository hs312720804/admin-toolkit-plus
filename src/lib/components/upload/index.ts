// import CUpload from './src/Upload'
// import install from '../../install'
// install(CUpload)

// export default CUpload

import { App } from 'vue'
import CUpload from './src/index.vue'

CUpload.install = (app: App): void => {
  const name = CUpload.name
  app.component(name, CUpload)
}

export default CUpload