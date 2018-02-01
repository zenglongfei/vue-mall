import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default (
  new Vuex.Store({
    state: {
      isLoading: false,
      isLoadingHtml: true
    },
    mutations: {
      showLoading (state, params) {
        this.state.isLoading = params
      },
      showLoadingHtml (state, params) {
        this.state.isLoadingHtml = params
      }
    }
  })
)
