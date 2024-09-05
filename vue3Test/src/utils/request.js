import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'http://big-event-wue-api-t.itheima.net'

const instance = axios.create({
  //TODO1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

// TODO2. 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// TODO3. 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    ElMessage.error(res.data.message || '自定义的拦截报错')
    return Promise.reject(res.data)
  },
  (err) => {
    // 特殊错误=== 401权限不足 或 token过期
    if (err.response?.status === 401) {
      router.push('/login')
    }

    //默认错误
    ElMessage.error(err.response.data.message || '服务错误')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
