import path from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

// https://cn.vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_PUBLIC_PATH } = env

  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      Vue(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/composables', 'src/store'],
        vueTemplate: true,
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
        resolvers: [
          ArcoResolver({ sideEffect: true }),
        ],
      }),
      // https://github.com/sxzz/unplugin-vue-macros/blob/main/packages/define-options/README-zh-CN.md
      DefineOptions(),
      // https://github.com/vbenjs/vite-plugin-style-import/blob/main/README.zh_CN.md
      createStyleImportPlugin({
        libs: [
          {
            libraryName: '@arco-design/web-vue',
            esModule: true,
            resolveStyle: (name) => {
              // css
              return `@arco-design/web-vue/es/${name}/style/css.js`
              // less
              // return `@arco-design/web-vue/es/${name}/style/index.js`
            },
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    server: {
      host: true,
      port: Number(VITE_PORT),
    },
  }
})
