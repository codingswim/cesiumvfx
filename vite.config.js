import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "node:path";
import cesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  server: {
    port: 5000
  },
  resolve: {
    alias: {
      "@": join(__dirname, "./src/"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
        modifyVars: {
          // 更改主题
        },
      },
    },
  },
  // build: {
  //   // 配置 build.rollupOptions.external 来实现 three 目录下的文件不参与打包
  //   rollupOptions: {
  //     external: [
  //       'public/assets/three/**',
  //     ]
  //   }
  // }
});
