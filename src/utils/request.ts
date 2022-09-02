import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message } from '@arco-design/web-vue'
import { userToken } from './storage'

export interface Result<T = any> {
  code: number
  msg: string
  data: T
}

class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置
  baseConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_URL,
    // url: import.meta.env.VITE_BASE_URL,
    timeout: 60000,
  }

  constructor(config?: AxiosRequestConfig) {
    // 实例化axios
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // TODO
        if (config.headers)
          config.headers.authorization = userToken.value
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      },
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const result = res.data
        if (!result)
          throw new Error('[HTTP] Request has no return value')
          // 用户可以自定义
        const { code, msg, data } = result
        const hasSuccess = result && Reflect.has(result, 'code') && code === 0
        if (hasSuccess)
          return data
        Message.error(msg)
        return Promise.reject(new Error(msg || 'Error'))
      },
      (err: any) => {
        return Promise.reject(err)
      },
    )
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  // get
  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  // post
  public post<T = any>(url: string, data: object, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }

  // put
  public put<T>(url: string, data: object, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put(url, data, config)
  }

  // delete
  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config)
  }
}

export default new Request()