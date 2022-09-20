import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import { viteMockServe } from 'vite-plugin-mock'
import Unocss from 'unocss/vite'
import type { ConfigEnv, UserConfig } from 'vite'

// https://cn.vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_PUBLIC_PATH } = env
  const isBuild = command === 'build'
  // const isHttps = /^https:\/\//.test(VITE_BASE_URL)

  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      Vue(),
      VueJsx(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/store'],
        vueTemplate: true,
        resolvers: [ArcoResolver()],
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
        resolvers: [ArcoResolver({ sideEffect: true })],
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
              interface replaceMap {
                [key: string]: string
              }
              // 这部分组件的使用必须依赖父级，所以直接忽略即可。
              const ignoreList = [
                'config-provider',
                'anchor-link',
                'sub-menu',
                'menu-item',
                'menu-item-group',
                'breadcrumb-item',
                'form-item',
                'step',
                'card-grid',
                'card-meta',
                'collapse-panel',
                'collapse-item',
                'descriptions-item',
                'list-item',
                'list-item-meta',
                'table-column',
                'table-column-group',
                'tab-pane',
                'tab-content',
                'timeline-item',
                'tree-node',
                'skeleton-line',
                'skeleton-shape',
                'grid-item',
                'carousel-item',
                'doption',
                'option',
                'optgroup',
                'icon',
              ]
              // 需要映射引入样式的组件列表
              const replaceList: replaceMap = {
                'typography-text': 'typography',
                'typography-title': 'typography',
                'typography-paragraph': 'typography',
                'typography-link': 'typography',
                'dropdown-button': 'dropdown',
                'input-password': 'input',
                'input-search': 'input',
                'input-group': 'input',
                'radio-group': 'radio',
                'checkbox-group': 'checkbox',
                'layout-sider': 'layout',
                'layout-content': 'layout',
                'layout-footer': 'layout',
                'layout-header': 'layout',
                'month-picker': 'date-picker',
                'range-picker': 'date-picker',
                row: 'grid', // 'grid/row.less'
                col: 'grid', // 'grid/col.less'
                'avatar-group': 'avatar',
                'image-preview': 'image',
                'image-preview-group': 'image',
              }
              if (ignoreList.includes(name)) return ''
              // eslint-disable-next-line no-prototype-builtins
              return replaceList.hasOwnProperty(name)
                ? `@arco-design/web-vue/es/${replaceList[name]}/style/css.js`
                : `@arco-design/web-vue/es/${name}/style/css.js`
              // less
              // return `@arco-design/web-vue/es/${name}/style/index.js`;
            },
          },
        ],
      }),
      // https://github.com/vbenjs/vite-plugin-mock
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer';
        setupProdMockServer();
        `,
      }),
      // https://github.com/unocss/unocss/tree/main/packages/vite
      Unocss(),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src'),
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js', // compile template
        },
      ],
    },
    server: {
      host: true,
      port: Number(VITE_PORT),
      // proxy: {
      //   '/api': {
      //     target: VITE_BASE_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //     ...(isHttps ? { secure: false } : {}),
      //   },
      // },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  }
})
