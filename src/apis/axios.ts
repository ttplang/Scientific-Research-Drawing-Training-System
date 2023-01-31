import axios from 'axios'
import { AxiosInstance } from 'axios'
import { RequestInterceptors, RequestConfig } from './types'
//将axios封装到类中
class Request {
  instance: AxiosInstance //axios的实例将被保存到这里
  interceptors?: RequestInterceptors //获取到的interceptors将被保存到这里
  constructor(config: RequestConfig) {
    //构造器里的config包括baseURL，timeout等
    this.instance = axios.create(config) //创建axios实例，并保存
    this.interceptors = config.interceptors //从传进来的config对象中取出key为interceptors的value并保存

    this.instance.defaults.headers.get['Content-Type'] = 'application/json; charset=UTF-8';
    this.instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
    const token = localStorage.getItem('token')
    if (token) {
      this.instance.defaults.headers.get['Authorization'] = token;
      this.instance.defaults.headers.post['Authorization'] = token;
    }
    
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    //再次封装request方法
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res) //将结果返回出去
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default Request