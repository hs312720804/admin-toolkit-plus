
import { App } from 'vue'
import type { SFCWithInstall } from '../../../utils/types'
import LazyRemoteSelect from './src/LazyRemoteSelect.vue'
LazyRemoteSelect.install = (app: App): void => {
  app.component(LazyRemoteSelect.name, LazyRemoteSelect)
}
const _LazyRemoteSelect: SFCWithInstall<typeof LazyRemoteSelect> = LazyRemoteSelect
export default _LazyRemoteSelect
