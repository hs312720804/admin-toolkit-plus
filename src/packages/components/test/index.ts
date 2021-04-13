import { App } from 'vue'
import type { SFCWithInstall } from '../../../utils/types'
import CTest from './src/index.vue'
CTest.install = (app: App): void => {
  app.component(CTest.name, CTest)
}
const _CTest: SFCWithInstall<typeof CTest> = CTest
export default _CTest