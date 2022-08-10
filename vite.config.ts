import path from 'path'
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://cn.vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	const { VITE_PORT, VITE_PUBLIC_PATH } = env

	return {
		base: VITE_PUBLIC_PATH,
		plugins: [
			vue(),
			AutoImport({
				imports: ['vue', 'vue-router'],
				dts: 'src/auto-imports.d.ts',
				dirs: ['src/composables', 'src/store'],
				vueTemplate: true
			}),
			Components({
				// allow auto load markdown components under `./src/components/`
				extensions: ['vue', 'md'],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				dts: 'src/components.d.ts'
			}),
			eslint({
				cache: false,
				include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
				exclude: ['node_modules']
			})
		],
		resolve: {
			alias: {
				'@/': `${path.resolve(__dirname, 'src')}/`
			}
		},
		server: {
			host: true,
			port: Number(VITE_PORT)
		}
	}
})
