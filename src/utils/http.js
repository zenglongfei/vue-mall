'use strict'

import axios from 'axios'
import store from '../store/index.js'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.commit('showLoading', true)
  return config
}, function (error) {
  // 对请求错误做些什么
  store.commit('showLoading', true)
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.commit('showLoading', false)
  return response
}, function (error) {
  // 对响应错误做点什么
  store.commit('showLoading', false)
  return Promise.reject(error)
})

export default {
  axiosQuery (Vue, obj, fnSuc, fnErr) {
    let setting = {
      // `url` 是用于请求的服务器 URL
      url: '', // 请求地址 必传
      // `method` 是创建请求时使用的方法
      method: 'get', // 默认是 get
      // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
      baseURL: '',
      // `headers` 是即将被发送的自定义请求头
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      // `data` 是作为请求主体被发送的数据
      // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
      // 在没有设置 `transformRequest` 时，必须是以下类型之一：
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - 浏览器专属：FormData, File, Blob
      // - Node 专属： Stream
      data: {},
      // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
      // 如果请求话费了超过 `timeout` 的时间，请求将被中断
      timeout: 3000,
      // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: 'json', // 默认的
      // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
      xsrfCookieName: 'XSRF-TOKEN', // default
      // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
      xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的
      // `onUploadProgress` 允许为上传处理进度事件
      onUploadProgress: function (progressEvent) {
        // 对原生进度事件的处理
      },
      // `onDownloadProgress` 允许为下载处理进度事件
      onDownloadProgress: function (progressEvent) {
        // 对原生进度事件的处理
      },
      // `maxContentLength` 定义允许的响应内容的最大尺寸
      maxContentLength: 2000,
      // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
      validateStatus: function (status) {
        return status >= 200 && status < 300 // 默认的
      },
      // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
      // 如果设置为0，将不会 follow 任何重定向
      maxRedirects: 5 // 默认的
    }

    for (let x in setting) {
      if (obj.hasOwnProperty(x)) setting[x] = obj[x]
    }
    axios(setting)
      .then((response) => {
        checkStatus(response, fnSuc, Vue)
      })
      .catch((error) => {
        checkCode(error, fnErr, Vue)
      })
  }
}

function checkStatus (response, fnSuc, Vue) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400 || response.status === 0)) {
    fnSuc(response.data)
    return
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  Vue.$Modal({
    content: response.statusText,
    btn: ['确定']
  })
}

function checkCode (error, fnErr, Vue) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (fnErr) {
    fnErr(error)
    return
  }
  Vue.$Modal({
    content: error.message,
    btn: ['确定']
  })
}
