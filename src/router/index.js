import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/homeModule.vue'
import Classify from '../components/classifyModule.vue'
import Shopcar from '../components/shopcarModule.vue'
import My from '../components/myModule.vue'
import Search from '../components/searchModule.vue'
// import store from '../store/index.js'

Vue.use(Router)

const router = new Router({
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
    {
      path: '/Home/Search',
      name: 'Search',
      component: Search,
      meta: {
        title: '搜索'
      }
    },
    {path: '/', redirect: 'Home'}
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // store.commit('getNavIndex', to.path.split('/')[1])
  next()
})

export default router
