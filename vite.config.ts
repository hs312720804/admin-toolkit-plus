import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
const alias: Record<string, string> = {
  "@": path.resolve(__dirname, './src'),
  //解决开发环境下的警告 You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
  "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
};
export default defineConfig({
  resolve: {
    alias
    // alias: [
    //   { 
    //     find: '@', replacement: path.resolve(__dirname, './src')
    //   }
    // ]
  },
  plugins: [vue()]
})
