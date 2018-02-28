
import Vue from 'vue'
import modalPlugin from './modalPlugin.vue'
import messagePlugin from './messagePlugin.vue'

// Message全局提示
const Message = (config) => {
  let messageOptions = {
    type: 'info', // 提示，可选，默认info提示；error失败；success成功
    content: '这是一个全局message提示' // 可选，默认提示
  }
  if (!!config && typeof config !== 'object') {
    messageOptions.content = config
  }
  pulicFn(messagePlugin, messageOptions, config)
}

// modal对话框
const Modal = (config) => {
  let modalOptions = {
    type: 1, // 标题；可选，默认1有标题；0无标题
    cancel: null, // 点击取消回调函数；可选，默认无
    sure: null, // 点击确定回调函数；可选，默认无
    btn: ['取消', '确定'], // 按钮；可选，默认'取消','确定'两个按钮
    btnShow: true, // 取消按钮是否隐藏；可选，默认显示；配合按钮使用
    title: '系统提示', // 标题；可选，默认显示
    content: '<p>这是一个modal对话框</p>' // 提示内容；可选，html模板
  }
  if (!!config && !!config.btn && config.btn.length === 1) {
    config.btnShow = false
  }
  pulicFn(modalPlugin, modalOptions, config)
}

const pulicFn = (plugin, option, config) => {
  let Tpl = Vue.extend(plugin)
  let instance = new Tpl()
  config = {
    ...option,
    ...config
  }
  for (let key in config) {
    instance.$data[key] = config[key]
  }
  document.body.appendChild(instance.$mount().$el)
}

export default {
  install () {
    Vue.prototype.$Message = Message.bind(Vue)
    Vue.prototype.$Modal = Modal.bind(Vue)
  }
}
