import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      // 配置src目录
      "@": path.resolve(__dirname,"src"),
      // 导入其他目录
      "components": path.resolve(__dirname, "components")
    }
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ]
  
})
