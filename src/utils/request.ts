import axios from 'axios'
import { Message } from '@arco-design/web-vue'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { userToken } from './storage'

const BASE_PREFIX = import.meta.env.VITE_BASE_URL

// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 30,
  // 请求头
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface RequestConfig extends AxiosRequestConfig {
  // 是否返回原始数据
  isReturnOriginData?: boolean
}

export interface Result<T = any> {
  code: number
  type: 'success' | 'error' | 'warning'
  msg: string
  data: T
}

const showErrorMessage = (code: number | string): string => {
  switch (code) {
    case 400:
      return '[400]:请求参数错误'
    case 401:
      return '[401]:未授权，请登录'
    case 403:
      return '[403]:拒绝访问'
    case 404:
      return '[404]:请求地址出错'
    case 408:
      return '[408]:请求超时'
    case 500:
      return '[500]:服务器内部错误'
    case 501:
      return '[501]:服务未实现'
    case 502:
      return '[502]:网关错误'
    case 503:
      return '[503]:服务不可用'
    case 504:
      return '[504]:网关超时'
    default:
      return `[${code}]:连接出错`
  }
}

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    if (config.headers) config.headers.authorization = userToken.value
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return response
})

const service = {
  request<T = any>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          if (config.isReturnOriginData) {
            resolve(res.data as any)
          }
          const { data } = res
          if (data.code === 0) {
            resolve(data.data as T)
          } else {
            Message.error(data.msg)
          }
        })
        .catch((err: AxiosError) => {
          const { response } = err
          if (response) {
            Message.error(showErrorMessage(response.status))
            return Promise.reject(response.data)
          }
          Message.warning('网络连接异常,请稍后再试!')
          reject(err)
        })
    })
  },
  get<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return service.request<T>({ ...config, url, method: 'GET' })
  },
  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return service.request<T>({ ...config, url, method: 'POST', data })
  },
  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return service.request<T>({ ...config, url, method: 'PUT', data })
  },
  delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return service.request<T>({ ...config, url, method: 'DELETE' })
  },
  upload<T = any>(url: string, data?: FormData | File, config?: RequestConfig): Promise<T> {
    return service.request<T>({
      ...config,
      url,
      method: 'POST',
      data,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
  download<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return service.request<T>({
      ...config,
      url,
      method: 'POST',
      data,
      responseType: 'blob',
    })
  },
}

export { axiosInstance }
export default service
