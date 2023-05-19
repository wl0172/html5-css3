import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // server: {
    //   host: '0.0.0.0', //ip地址
    //   port: 8080, //端口号
    //   open: false, //启动后是否自动打开浏览器
    //   hrm: true,
    //   proxy: {
    //     "/api": {
    //       target: "http://117.78.26.78",
    //       changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
    //       ws: true, // 是否启用  websockets;
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //       pathRewrite: {
    //         // 去掉 路径中的  /api  的这一截
    //         "^/api": ""
    //       }
    //     },
    //   },
    // }
  }
})
