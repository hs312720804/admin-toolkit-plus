import { App } from 'vue'
import type { SFCWithInstall } from '../../../utils/types'
import CTest from './src/index.vue'
CTest.install = (app: App): void => {
  const name = CTest.name
  app.component(name, CTest)
}
// const _CTest: SFCWithInstall<typeof CTest> = CTest
export default CTest