import Request from './axios'
const Requests = new Request({
  // baseURL: 'http://localhost:8080',
  baseURL: 'http://120.24.97.232:3000',
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        // config.headers.Authorization = `${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default Requests