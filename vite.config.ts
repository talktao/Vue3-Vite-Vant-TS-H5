import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig(({command, mode})=>{
	// 检查process.cwd()路径下.env.develeport.local、.env.development、.env.local、.env这四个环境文件
	loadEnv(mode, process.cwd()) 
	return {
		
		// 静态资源基础路径 base: './' || '',
		base:'./',
		
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
				// 配置后，Vant各组件才生效
				styleImport({
					resolves: [VantResolve()],
				}),
		],

		
	
		// 跨域代理
		server:{
			proxy:{
				//这里是通过请求/api 来转发到 https://api.pingping6.com/
				//假如你要请求https://api.*.com/a/a
				//那么axios的url，可以配置为 /api/a/a
				'/api': ''
			}   
		}
	}	
})
