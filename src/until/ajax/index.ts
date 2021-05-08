import axios from 'axios'
import qs from 'qs'

// 自定义axios实例
const http = axios.create({

  baseURL: '/',

  // ms
  timeout: 150000,

  // 只适用'POST'、'PUT'、'PATCH'，序列化参数
  transformRequest: [
    function(data) {
      return JSON.stringify(data)
    }
  ],

  // GET请求，序列化参数，只有在有参数的情况先才会执行
  paramsSerializer(params) {
    return qs.stringify(params, {
      arrayFormat: 'brackets'
    })
  }
})

/**
 * 请求拦截器
 * @return {[type]}          [description]
 */
http.interceptors.request.use(function(request) {
  return request
})

/**
 * 响应拦截器
 * @return {[type]}                 [description]
 */
http.interceptors.response.use(function(response) {
  const { data } = response
  return data
}, function(error) {
  // loading && loading.close()
  console.log(error)
  return Promise.reject(error)
})

/**
 * http工具函数
 * @param  {...[type]} config [description]
 * @return {[type]}         [description]
 */
const ajax = function(config:any) {
  return http(config)
}

/**
 * GET操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
ajax.get = function(...args:any) {
  const [url, data, options] = args

  return http({
    url,
    params: data,
    method: 'get',
    ...options
  })
}

/**
 * POST操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
ajax.post = function(...args:any) {
  const [url, data, options] = args

  return http({
    url,
    data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'post',
    ...options
  })
}

/**
 * PUT操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
ajax.put = function(...args:any) {
  const [url, data, options] = args

  return http({
    url,
    data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'put',
    ...options
  })
}

/**
 * 删除操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
ajax.delete = function(...args:any) {
  const [url, data, options] = args

  return http({
    url,
    data: data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'delete',
    ...options
  })
}

/**
 * POSTJSON操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
ajax.postJSON = function(...args:any) {
  const [url, data, options] = args

  return http({
    url,
    data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'post',
    ...options
  })
}

/**
 * 上传文件
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
ajax.upload = function(...args:any) {
  const [url, data, options] = args
  if (!(data instanceof FormData)) {
    throw TypeError('数据格式错误')
  }

  return http({
    url,
    data,
    transformRequest: [(data) => data],
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post',
    ...options
  })
}

export default ajax
