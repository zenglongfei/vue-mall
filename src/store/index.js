import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default (
  new Vuex.Store({
    state: {
      navIndex: 0,
      isLoading: false
    },
    mutations: {
      getNavIndex (state, params) {
        this.state.navIndex = params
      },
      showLoading (state, params) {
        this.state.isLoading = params
      }
    }
  })
)
