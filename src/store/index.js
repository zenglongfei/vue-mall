import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default (
  new Vuex.Store({
    state: {
      navIndex: 0
    },
    mutations: {
      getNavIndex (state, params) {
        this.state.navIndex = params
      }
    }
  })
)
