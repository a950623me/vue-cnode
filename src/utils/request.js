import axios from 'axios'
import { Message , Loading } from 'element-ui'
/**
 * 封装axios，实现发送/响应接口的拦截，来实现统一提示等效果
 */

const error = () => {
    Message({
      type: 'error',
      message: '遇到错误，请刷新重试！',
      duration: 2 * 1000
    })
}
let loading
const startLoading = () => {
    loading = Loading.service({
      lock: true,
      text: '加载中……',
      background: 'rgba(0, 0, 0, 0.7)'
    })
}
const endLoading = () => {
    loading.close()
}
const service = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000 // 请求超时时间限制
})
// 请求拦截器
service.interceptors.request.use(
    config => {
      // 在发送请求之前做些什么
      startLoading()
      return config
    },
    err => {
      // 对请求错误做些什么
      endLoading()
      error()
      Promise.reject(err)
    }
)
// 响应拦截器
service.interceptors.response.use(
    response => {
      // 对响应数据做点什么
      endLoading()
      return response.data
    },
    err => {
      // 对响应错误做点什么
      endLoading()
      error()
      return Promise.reject(err)
    }
)
export default service