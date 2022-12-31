import { fileURLToPath, URL } from 'node:url'
import AutoImport from "unplugin-auto-import/vite"
// 自动引入图标
// https://www.weipxiu.com/8706.html
import Icons from 'unplugin-icons/vite' // icon相关
import IconsResolver from 'unplugin-icons/resolver' // icon相关
// 组件注册
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ———————————————— 原文链接：https://blog.csdn.net/qq_42611074/article/details/123036047
    AutoImport({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      dts: "src/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
      // Auto import icon components

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      // ui库解析器，也可以自定义 
      resolvers: [
        // Auto register Element Plus components
        ElementPlusResolver(),
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'] // 重点，记住这里配了个ep，参数别改，就用ep，改了后我发现就不好使了
        })
      ],
      // relative paths to the directory to search for components. 
      dirs: ['src/components', 'src/layouts'],
      dts: true,
      // valid file extensions for components.
      extensions: ['vue'],
      // search for subdirectories
      deep: true,

    }),
    Icons({
      autoInstall: true
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

})
