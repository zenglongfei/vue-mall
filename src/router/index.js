import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/homeModule.vue'
import Classify from '../components/classifyModule.vue'
import Shopcar from '../components/shopcarModule.vue'
import My from '../components/myModule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      meta: {
        title: '我的'
      }
    },
    {path: '/', redirect: 'Home'}
  ]
})
