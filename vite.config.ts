import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
// export default {
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: './src/lib/index.ts',
//       name: 'MyLib',
//       formats: ['es', 'umd']
//     }
// }}
