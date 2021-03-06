// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Dialog from './plugins/dialog.js'
import router from './router/index.js'
import store from './store/index.js'
import axiosQuery from './utils/http.js'

Vue.prototype.$Store = store
Vue.use(Dialog)
Vue.use(axiosQuery)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
  store
})
