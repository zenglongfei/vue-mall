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
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {path: '/', redirect: 'Home'}
  ]
})
