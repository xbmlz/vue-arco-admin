import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
const modules = import.meta.glob('./**/*.ts', { eager: true })

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) return
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  mockModules.push(...modules[key].default)
})

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
