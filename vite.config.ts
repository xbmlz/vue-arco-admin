import path from 'path'
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://cn.vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	const { VITE_PORT, VITE_PUBLIC_PATH } = env

	return {
		base: VITE_PUBLIC_PATH,
		plugins: [vue()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			}
		},
		server: {
			host: true,
			port: VITE_PORT
		}
	}
})
