<template>
  <div id="app">
    <loading-component v-show='isLoading' />
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <nav-component/>
  </div>
</template>

<script>
import NavComponent from './components/navComponent'
import LoadingComponent from './components/loadingComponent'
import { mapState } from 'vuex'

export default {
  components: {
    LoadingComponent,
    NavComponent
  },
  name: 'App',
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  },
  data () {
    return {
      transitionName: 'silde-left'
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style>
  @import './assets/css/main.css';
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 300ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0.4;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0.4;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0.4;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0.4;
    transform: translate3d(-100%, 0, 0);
  }
</style>
