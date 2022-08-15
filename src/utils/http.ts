import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

interface Result {
  code: number
  msg: string
}

interface ResultData<T = any> extends Result {
  data?: T
}

const config: AxiosRequestConfig = {
  url: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
  withCredentials: true,
  headers: {},
}

class HttpClient {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (err: any) => err,
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res
      },
      (err: any) => err,
    )
  }

  // get
  get<T>(url: string, params: object): Promise<ResultData<T>> {
    return this.instance.get(url, { params })
  }

  // post
  post<T>(url: string, params: object): Promise<ResultData<T>> {
    return this.instance.post(url, params)
  }

  // put
  put<T>(url: string, params: object): Promise<ResultData<T>> {
    return this.instance.put(url, params)
  }

  // delete
  delete<T>(url: string, params: object): Promise<ResultData<T>> {
    return this.instance.delete(url, { params })
  }
}

export default new HttpClient(config)
