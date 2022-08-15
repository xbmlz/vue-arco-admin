import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface Result<T> {
  code: number
  msg: string
  data?: T
}

class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置
  baseConfig: AxiosRequestConfig = {
    url: import.meta.env.VITE_BASE_URL,
    timeout: 60000,
    headers: {
      token: localStorage.getItem('token') as string,
    },
  }

  constructor(config?: AxiosRequestConfig) {
    // 实例化axios
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      },
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
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
  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config)
  }

  // post
  public post<T = any>(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config)
  }

  // put
  public put<T>(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config)
  }

  // delete
  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config)
  }
}

export default new Request()
