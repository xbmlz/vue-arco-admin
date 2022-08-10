import path from 'path'
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

// https://cn.vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	const { VITE_PORT, VITE_PUBLIC_PATH } = env

	return {
		base: VITE_PUBLIC_PATH,
		plugins: [
			vue(),
			eslint({
				cache: false,
				include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
				exclude: ['node_modules']
			})
		],
		resolve: {
			alias: [
				{
					find: '@',
					replacement: path.resolve(__dirname, '../src')
				}
			]
		},
		server: {
			host: true,
			port: Number(VITE_PORT)
		}
	}
})
